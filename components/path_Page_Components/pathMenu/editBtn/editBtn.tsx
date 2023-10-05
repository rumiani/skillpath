import { useRouter } from "next/router";
import React from "react";

const EditBtn = () => {
  const router = useRouter();
  const pathUrl = router.query.url;

  const editHandler = () => router.push("/path-edit/" + pathUrl);

  return (
    <>
      <button
        className="text-yellow-500 pt-2 hover:font-bold"
        title="Edit this path"
        onClick={editHandler}
      >
        Edit
      </button>
    </>
  );
};

export default EditBtn;
