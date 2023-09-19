import { resetPathReducer } from "@/redux/appStateSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CreatedPath = () => {
  const { path } = useSelector((state) => state.appState);
  const router = useRouter()
  const actionType = router.pathname.split('/')[1] === 'path-edit'?'updated':'created'
  
  const dispatch = useDispatch();
  const resetHandler = () => {
    dispatch(resetPathReducer());
  };

  return (
    <div className="text-center flex flex-col gap-10 items-center w-full p-4">
      <Link
        href={"/path/" + path.url}
        className="text-blue-500 hover:underline block my-4 "
        onClick={resetHandler}
      >
        See the {actionType} path
      </Link>
      <div className="flex flex-row gap-4 max-w-xs">
        <Link href="/" className="text-blue-500 hover:underline">
          <button className="primaryBtn" onClick={resetHandler}>
            Home
          </button>
        </Link>
        <button className="primaryBtn" onClick={resetHandler}>
          New path
        </button>
      </div>
    </div>
  );
};

export default CreatedPath;
