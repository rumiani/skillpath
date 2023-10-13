import React, { useEffect } from "react";
import TitleInput from "../form_components/titleInput/titleInput";
import TagsInput from "../form_components/tagsInput/tagsInput";
import Preview from "../form_components/preview/preview";
import _ from "lodash";
import { useForm } from "react-hook-form";
import QuillEditor from "../form_components/textInput/TextInput";
import { useDispatch } from "react-redux";
import { resetPathReducer } from "@/redux/appStateSlice";
import UpdateBtn from "../form_components/updateBtn/updateBtn";
import { updatePath } from "@/actions/path/updatePath";
import { useRouter } from "next/router";
import CreatedPath from "../form_components/createdPath/createdPath";
import CancelBtn from "../form_components/cancelBtn/cancelBtn";
interface pathType {
  id:string,
  title:string,
  body:string,
  length:number,
  tags:string[],
  url:string
}
type FormValues = {
  title: string;
  html: string;
  text: string;
  tags: {
    array: string[];
    tag: string;
  };
};
const Edit_Page_Components = ({path}:{path:pathType}) => {
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
    const path = { title: data.title, body: data.html, tags: data.tags?.array, url:router.query.url };
    if (path.title && typeof path.url === 'string') {  
      dispatch(updatePath(path));
    }
  };

  useEffect(() => {
    dispatch(resetPathReducer());

    const subscription = watch((value) => {
      //   console.log("form values", value);
    });
    return () => subscription.unsubscribe;
  }, [dispatch, watch, reset, isSubmitSuccessful, setValue, getValues]);

  if (isSubmitSuccessful) {
    // console.log("Submit Successful");
    // reset()
    return  <CreatedPath/>
  }
  return (
    <div className="flex flex-col items-center py-4">
      <form
        className="bg-white w-full rounded-xl p-2 md:p-4 flex flex-col justify-center"
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

export default Edit_Page_Components;
