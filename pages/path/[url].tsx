import Custom404 from "@/components/404_components/custom404";
import PathPage from "@/components/path_page/pathPage";
import React from "react";

export const getServerSideProps = async (context) => {
  const { url } = context.query;
  try {
    const res = await fetch("http://localhost:5000/path/" + url);
    const data = await res.json();
    return {
      props: { path: data },
    };
  } catch (error) {
    console.log(error);
  }
};
const Index = ({ path }) => {
  return <div>{path.url ? <PathPage path={path} /> : <Custom404 />}</div>;
};

export default Index;
