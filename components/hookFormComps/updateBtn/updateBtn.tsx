import React from "react";

const UpdateBtn = ({ isSubmitting, updateHandler }) => {
  return (
    <>
      <button
        disabled={isSubmitting}
        onClick={updateHandler}
        className="updateBtn mx-auto"
      >
        UPDATE
      </button>
    </>
  );
};

export default UpdateBtn;
