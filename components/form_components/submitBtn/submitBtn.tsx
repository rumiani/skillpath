import _ from "lodash";
import { useRouter } from "next/router";
import React from "react";

const SubmitBtn = ({ isSubmitting, submitHandler, submitType }) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        onClick={submitHandler}
        className="primaryBtn  mx-auto"
      >
        {_.capitalize(submitType)}
      </button>
    </>
  );
};

export default SubmitBtn;
