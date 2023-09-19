import Auth from "@/components/auth_components/auth";
import Signup from "@/components/auth_components/signup/signup";
import Signup_Page_Components from "@/components/signup_Page_Components/Signup_Page_Components";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>Skillpath</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="skill, skillpath" />
        <meta
          name="description"
          content="Write about your skill path here ..."
        />
      </Head>
      <section>
        <div className="g-6 flex flex-row h-full items-center justify-center lg:justify-between">
          <Signup_Page_Components />
        </div>
      </section>
    </>
  );
};

export default Index;
