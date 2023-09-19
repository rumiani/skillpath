import Image from "next/image";
import React from "react";
import SignupForm from "./signupForm/signupForm";
import GoogleLoginComp from "../googleLogin/googleLogin";
import Link from "next/link";

const Signup_Page_Components = () => {
  return (
    <section className="my-4 flex flex-row">
      <div className="hidden lg:block lg:w-1/2">
        <Image
          width={48}
          height={48}
          src="./assets/images/login.svg"
          className="w-full"
          alt="Phone image"
        />
      </div>
      <div className="w-full lg:w-1/2 px-2 lg:px-4">
        <h2 className="font-bold text-center my-4">Sign up</h2>
        <SignupForm />
        <div className="flex flex-row gap-2 my-2 w-fit mx-auto">
          <p>Already have an account?</p>
          <Link href={"/login"} className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
        <div className="w-full mx-auto">
        <div className=" my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-gray-400">
            OR
          </p>
        </div>
        </div>
        <GoogleLoginComp />
      </div>
    </section>
  );
};

export default Signup_Page_Components;
