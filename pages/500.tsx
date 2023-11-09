import React from "react";
import Head from "next/head";
import Link from "next/link";
const Custom500: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>SkillPath |500</title>
        <meta name="author" content="Maziar Rumiani" />
        <meta name="keywords" content="skill, skillpath" />
        <meta name="description" content="Server Error" />
      </Head>
      <main>
        <div className="flex flex-col items-center justify-center h-52 p-4 rounded-lg w-fit mx-auto my-20 shadow-sm shadow-gray-500 ">
          <h1 className="text-6xl font-bold mb-4 text-gray-800">500</h1>
          <p className="text-xl text-gray-600 mb-8">
            Server-side error occurred, please contact: &nbsp;
          <Link href="mailto:contact@maziar9170@gmail.com" className="text-blue-500 hover:underline text-xl font-bold">
            Maziar Rumiani
          </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Custom500;
