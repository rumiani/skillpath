import React, { useEffect, useState } from "react";
import EmailInput from "@/components/form_components/emailInput/emailInput";
import PasswordInput from "@/components/form_components/passwordInput/passwordInput";
import SubmitBtn from "@/components/form_components/submitBtn/submitBtn";
import { useForm } from "react-hook-form";
import { userLogin } from "@/actions/user/login";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
type FormValues = {
  email: string;
  password: string;
};
const LoginForm = () => {
  const {user} = useSelector(state => state.appState)
  const router = useRouter()
  const dispatch = useDispatch()
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
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
    const userInfo = { email: data.email, password: data.password };
    if (userInfo.email) {      
      dispatch(userLogin(userInfo));
    }
  };
console.log(user);

  useEffect(() => {
    const subscription = watch((value) => {
        // console.log("form values", value);
    });
    return () => subscription.unsubscribe;
  }, [watch, reset, isSubmitSuccessful, setValue, getValues]);

  if (isSubmitSuccessful) {
    // console.log("Submit Successful");
    // reset()
    // return  <SentComponent path={path} newPathHandler={newPathHandler}/>
  }

  return (
    <form
      className="max-w-xs mx-auto flex flex-col gap-7 p-1"
      noValidate
      onSubmit={handleSubmit(submitHandler)}
    >
      <EmailInput register={register} error={errors.email?.message} />
      <PasswordInput register={register} error={errors.password?.message}/>
      {/* <ForgotPassword/> */}
      <SubmitBtn submitType={"login"} isSubmitting={isSubmitting} submitHandler={submitHandler}/>
    </form>
  );
};
export default LoginForm;
