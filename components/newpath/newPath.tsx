import React from "react";
import NewpathForm from "./NewpathForm/NewpathForm";
import CreatedPath from "./createdPath/createdPath";
import { useSelector } from "react-redux";

const NewPath = () => {
  const { path } = useSelector((state) => state.appState);

  return (
    <>{path.url ? <CreatedPath/> : <NewpathForm /> }</>
  );
};

export default NewPath;
