import React, { useEffect } from "react";
import TitleInput from "./titleInput/titleInput";
import TagsInput from "./tagsInput/tagsInput";
import { toast } from "react-toastify";
import Preview from "./preview/preview";
import _ from "lodash";
import { useForm } from "react-hook-form";
import QuillEditor from "./textInput/TextInput";
import { createPath } from "@/actions/path/createPath";
import { useDispatch, useSelector } from "react-redux";
import { resetPathReducer } from "@/redux/appStateSlice";
import SubmitBtn from "./submitBtn/submitBtn";

type FormValues = {
  title: string;
  html: string;
  text: string;
  tags: {
    array: string[];
    tag: string;
  };
};
const PathForm = () => {
  const {path} = useSelector(state => state.appState)
  const dispatch = useDispatch()
  const form = useForm<FormValues>({
    defaultValues: {
      title: path.title,
      html: path.body,
      text: "",
      tags: {
        array: path.tags,
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
        <SubmitBtn isSubmitting={isSubmitting} submitHandler={submitHandler}/>
      </form>
      <Preview getValues={getValues} />
    </div>
  );
};

export default PathForm;
