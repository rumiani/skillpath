import React from "react";
import CreatedPath from "./createdPath/createdPath";
import { useSelector } from "react-redux";
import PathForm from "../pathForm/pathForm";

const NewPath = () => {
  const { path } = useSelector((state) => state.appState);

  return (
    <>{path.url ? <CreatedPath/> : <PathForm /> }</>
  );
};

export default NewPath;
