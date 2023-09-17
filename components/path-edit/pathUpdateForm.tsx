import React, { useEffect } from "react";
import TitleInput from "../hookFormComps/titleInput/titleInput";
import TagsInput from "../hookFormComps/tagsInput/tagsInput";
import { toast } from "react-toastify";
import Preview from "../hookFormComps/preview/preview";
import _ from "lodash";
import { useForm } from "react-hook-form";
import QuillEditor from "../hookFormComps/textInput/TextInput";
import { createPath } from "@/actions/path/createPath";
import { useDispatch, useSelector } from "react-redux";
import { resetPathReducer } from "@/redux/appStateSlice";
import SubmitBtn from "../hookFormComps/submitBtn/submitBtn";
import UpdateBtn from "../hookFormComps/updateBtn/updateBtn";
import { updatePath } from "@/actions/path/updatePath";
import { useRouter } from "next/router";
import CreatedPath from "../hookFormComps/createdPath/createdPath";
import CancelBtn from "../hookFormComps/cancelBtn/cancelBtn";

type FormValues = {
  title: string;
  html: string;
  text: string;
  tags: {
    array: string[];
    tag: string;
  };
};
const PathUpdateForm = ({path}) => {
  const router = useRouter()
  const dispatch = useDispatch();  
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

  const updateHandler = (data: FormValues) => {
    const path = { title: data.title, body: data.html, tags: data.tags?.array };
    if (path.title) {      
      dispatch(updatePath(router.query.url, path));
    }
  };

  useEffect(() => {
    dispatch(resetPathReducer());

    const subscription = watch((value) => {
      //   console.log("form values", value);
    });
    return () => subscription.unsubscribe;
  }, [watch, reset, isSubmitSuccessful, setValue, getValues]);

  if (isSubmitSuccessful) {
    // console.log("Submit Successful");
    // reset()
    return  <CreatedPath/>
  }
  return (
    <div className="flex flex-col items-center py-4">
      <form
        className="bg-white rounded-xl p-2 md:p-4 flex flex-col justify-center"
        noValidate
        onSubmit={handleSubmit(updateHandler)}
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
        <UpdateBtn isSubmitting={isSubmitting} updateHandler={updateHandler} />
      </form>
      <Preview getValues={getValues} />
      <CancelBtn/>
    </div>
  );
};

export default PathUpdateForm;
