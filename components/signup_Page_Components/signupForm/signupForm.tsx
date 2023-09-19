import React, { useEffect } from "react";
import RepeatPasswordInput from "../../form_components/repeatPasswordInput/repeatPasswordInput";
import EmailInput from "@/components/form_components/emailInput/emailInput";
import PasswordInput from "../../form_components/passwordInput/passwordInput";
import SubmitBtn from "@/components/form_components/submitBtn/submitBtn";
import UserNameInput from "@/components/form_components/userNameInput/userNameInput";
import { useForm } from "react-hook-form";
import NameInput from "@/components/form_components/nameInput/nameInput";

type FormValues = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};
const SignupForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
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
    const user = { email: data.email, password: data.password };
    if (user.email) {
      console.log(user);

      // dispatch(createPath(path));
    }
  };

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
    <>
      <form
        className="max-w-xs mx-auto flex flex-col gap-6"
        noValidate
        onSubmit={handleSubmit(submitHandler)}
      >
        <NameInput
          inputTitle="firstName"
          register={register}
          error={errors.firstName?.message}
        />
        <NameInput
          inputTitle="lastName"
          register={register}
          error={errors.lastName?.message}
        />
        <EmailInput register={register} error={errors.email?.message} />
        <PasswordInput register={register} error={errors.password?.message} />
        <RepeatPasswordInput
          register={register}
          error={errors.repeatPassword?.message}
          watch={watch}
        />
        <SubmitBtn
          submitType={"sign up"}
          isSubmitting={isSubmitting}
          submitHandler={submitHandler}
        />
      </form>
    </>
  );
};

export default SignupForm;
