import React, { useState, useEffect } from "react";
import TitleInput from "./titleInput/titleInput";
import TagsInput from "./tagsInput/tagsInput";
import { toast } from "react-toastify";
import Preview from "./preview/preview";
import _ from "lodash";
import SentComponent from "./sentComponent/sentComponent";
import { useForm, Controller } from "react-hook-form";
import QuillEditor from "./textInput/TextInput";
import { createPath } from "@/actions/path/createPath";
import { useDispatch } from "react-redux";
import { resetPathReducer } from "@/redux/appStateSlice";

type FormValues = {
  title: string;
  html: string;
  text: string;
  tags: {
    array: string[];
    tag: string;
  };
};
const NewpathForm = () => {
  const dispatch = useDispatch()
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      html: "",
      text: "",
      tags: {
        array: [],
        tag: "",
      },
    },
    mode: "onBlur",
  });
  const {
    register,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const submitHandler = (data: FormValues) => {
    const path = { title: data.title, body: data.html, tags: data.tags?.array };
    if(path.title){      
      dispatch(createPath(path))
    }
  };

  useEffect(() => {
    dispatch(resetPathReducer())

    const subscription = watch((value) => {
      //   console.log("form values", value);
    });
    return () => subscription.unsubscribe;
  }, [watch, reset, isSubmitSuccessful, setValue, getValues]);

  //     const submitHandler = async (event:FormEvent) =>{

  //         // console.log(path);
  //         const result = await dispatch(createPath(path))
  //         if(result){
  //         }
  //         if(path.url){
  //             dialogElement.current!.showModal()
  //         }
  //     }
  //         // dispatch(resetPathReducer())

  if (isSubmitSuccessful) {
    // console.log("Submit Successful");
    // reset()
    // return  <SentComponent path={path} newPathHandler={newPathHandler}/>
  }
  return (
    <div>
      <form
        className="bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center"
        noValidate
        onSubmit={handleSubmit(submitHandler)}
      >
        <TitleInput register={register} error={errors.title?.message} />

        <QuillEditor
          error={errors.html?.message}
          watch={watch}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />

        <TagsInput
          register={register}
          error={errors.tags?.tag?.message}
          watch={watch}
          setValue={setValue}
          getValues={getValues}
        />
        <button
          disabled={isSubmitting}
          onClick={submitHandler}
          className="primaryBtn  mx-auto"
        >
          Publish
        </button>
      </form>
      {/* <SentComponent url={url}/> */}
      <Preview getValues={getValues} />
    </div>
  );
};

export default NewpathForm;
