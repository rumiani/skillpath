import Custom404 from "@/components/404_components/custom404";
import Edit_Page_Components from "@/components/Edit_Page_Components/Edit_Page_Components";
import CreatedPath from "@/components/form_components/createdPath/createdPath";
import { pathType } from "@/redux/interfaces";

import React from "react";

export const getServerSideProps = async (context: { query: { url: any; }; }) => {  
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

const Index = ({ path }:{path:pathType}) => {
  return (
    <div className="break-words w-full h-full border border-green-500 my-2 rounded-xl">
      {path.title && <Edit_Page_Components path={path}/>}
      {!path.title && path.url && <CreatedPath/>} 
      {!path.title && !path.url && <Custom404/>}
    </div>
  );
};

export default Index;
