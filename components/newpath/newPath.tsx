import React from "react";
import CreatedPath from "../form_components/createdPath/createdPath";
import { useSelector } from "react-redux";
import PathForm from "./pathForm/pathForm";

const NewPath = () => {
  const { path } = useSelector((state) => state.appState);
  const defaultValues = {
    title: '',
    html: '',
    text: '',
    tags: {
      array: '',
      tag: '',
    },
  }
  return (
    <>{path.url ? <CreatedPath/> : <PathForm defaultValues={defaultValues}/> }</>
  );
};

export default NewPath;
