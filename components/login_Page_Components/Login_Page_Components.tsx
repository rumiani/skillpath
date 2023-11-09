import Image from "next/image";
import React from "react";
import LoginForm from "./loginForm/loginForm";
import GoogleLoginComp from "../googleLogin/googleLogin";
import Link from "next/link";

const Login_Page_Components = () => {
  return (
    <section className="h-screen my-8 flex flex-row">
      <div className="hidden lg:block mb-12 lg:w-1/2">
        <Image
          width={10000}
          height={1}
          src="./assets/images/login.svg"
          className="rounded-lg"
          alt="Phone image"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="font-bold text-center my-4">Log in</h2>
        {/* <LoginForm />
        <div className="flex flex-row gap-2 my-2 w-fit mx-auto">
          <p>Don&apos;t have an account?</p>
          <Link href={"/signup"} className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-gray-400">
            OR
          </p>
        </div> */}
        <GoogleLoginComp />
      </div>
    </section>
  );
};

export default Login_Page_Components;
