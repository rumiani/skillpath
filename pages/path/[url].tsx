import Custom404 from "@/components/custom404/custom404";
import PathPage from "@/components/pathPage/pathPage";
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
  console.log(path);

  return <div>{path.url ? <PathPage path={path} /> : <Custom404 />}</div>;
};

export default Index;
