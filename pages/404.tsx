import React from "react";
import Custom404 from "@/components/404_components/custom404";
import Head from "next/head";

const NotFound: React.FC = () => {
    return (
        <>
         <Head>
            <link rel="icon" href="/assets/favicon.ico" /> 
            <title>SkillPath |404</title>
            <meta name="author" content="Maziar Rumiani" />
            <meta name="keywords" content="skill, skillpath" />
            <meta name="description" content="Nothing is here" />
        </Head>
      <main>
        <Custom404/>
      </main>
        </>
    )
  }

export default NotFound;