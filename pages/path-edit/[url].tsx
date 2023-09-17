import Custom404 from "@/components/custom404/custom404";
import CreatedPath from "@/components/hookFormComps/createdPath/createdPath";
import PathUpdateForm from "@/components/path-edit/pathUpdateForm";
import React from "react";

export const getServerSideProps = async (context) => {
  const { url } = context.query;
  try {
    const res = await fetch("http://localhost:5000/path-edit/" + url);
    const data = await res.json();
    return {
      props: { path: data },
    };
  } catch (error) {
    console.log(error);
  }
};

const Index = ({ path }) => {
  return (
    <div className=" w-full h-full border border-green-500 my-2 rounded-xl">
      {path.title && <PathUpdateForm path={path}/>}
      {!path.title && path.url && <CreatedPath/>} 
      {!path.title && !path.url && <Custom404/>}
    </div>
  );
};

export default Index;
