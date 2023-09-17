import { useRouter } from "next/router";
import React from "react";

const SubmitBtn = ({ isSubmitting, submitHandler }) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        onClick={submitHandler}
        className="primaryBtn  mx-auto"
      >
        Publish
      </button>
    </>
  );
};

export default SubmitBtn;
