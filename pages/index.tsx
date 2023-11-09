import React, { useEffect } from "react";
import Head from "next/head";
import Home_page_components from "../components/home_page_components/Home_page_components";
import { useRouter } from "next/navigation";

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:5000");
  // const errorCode = res.ok ? false : res.status
  // const data = await res.json();
  // return {props: { errorCode, paths:data }}

  try {
    const res = await fetch("http://localhost:5000");
    if (!res.ok) {
      throw new Error("Network request failed");
    }
    const data = await res.json();

    return { props: { paths: data } };
  } catch (error) {
    console.error("error:" + error);
    return { props: { errorCode: error.message } }; // Provide default data or an error message
  }
};

export default function Index({ errorCode, paths }) {
  const router = useRouter();
  console.log(paths);
  console.log(errorCode);

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
      <main
        className={`flex bg-blue-50 min-h-screen flex-col items-center justify-between sm:p-2 lg:p-4`}
      >
        <div className="z-10 p-2 max-w-5xl w-full items-center justify-between font-mono text-sm">
          {errorCode ? (
            <div>Server error...</div>
          ) : (
            <Home_page_components paths={paths} />
          )}
        </div>
      </main>
    </>
  );
}
