import React, { useState, useEffect } from "react";
import TitleInput from "./titleInput/titleInput";
import TagsInput from "./tagsInput/tagsInput";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Preview from "./preview/preview";
import _ from "lodash";
import { createPath } from "@/actions/paths";
import { pathReducer, resetPathReducer } from "@/redux/appStateSlice";
import SentComponent from "./sentComponent/sentComponent";
import { useForm, Controller } from "react-hook-form";
import QuillEditor from "./textInput/TextInput";

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

  const submitHandler = (data: FormValues,e) => {
        // data.preventDefault();
        
    // if (data.key === 'Enter') {
    //     // console.log(data);
    //   }
    console.log('submited',data);
  };

  useEffect(() => {
    // console.log(getValues());
    // console.log(setValue('title','maziar'));
    const subscription = watch((value) => {
    //   console.log("form values", value);
    });
    return () => subscription.unsubscribe;
  }, [watch, reset, isSubmitSuccessful, setValue, getValues]);

  //     const {path} = useSelector( state => state.appState)
  //     const dispatch = useDispatch()
  //     const dialogElement = useRef()

  //     const submitHandler = async (event:FormEvent) =>{
  //         if (event.key === "Enter")
  //             event.preventDefault();

  //         if(path.tags.length === 0){
  //             document.querySelector<HTMLInputElement>('#inputTag')?.focus()
  //             return toast.error(`Please add a tag.`, {position: toast.POSITION.TOP_RIGHT})
  //         }
  //         // console.log(path);
  //         const result = await dispatch(createPath(path))
  //         if(result){
  //         }
  //         if(path.url){
  //             dialogElement.current!.showModal()
  //         }
  //     }
  //         // dispatch(resetPathReducer())

  const newPathHandler = () => {};
  if (isSubmitSuccessful) {
    console.log("Submit Successful");
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
      <Preview getValues={getValues}/>
    </div>
  );
};

export default NewpathForm;
