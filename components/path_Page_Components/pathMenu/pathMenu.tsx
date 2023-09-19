import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { deletePath } from "@/pages/api/api";
import { useRouter } from "next/router";
import Confirmation from "@/components/confirmation/confirmation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getPath } from "@/actions/path/getPath";

const PathMenu = () => {
  const router = useRouter();
  const pathUrl = router.query.url;
  const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => setShowModal(true);

  const confirmationHandler = async (confirm) => {
    if (confirm) {
      await deletePath(pathUrl).then(() => {});
      if (await deletePath(pathUrl)) {
        toast.success("Path deleted.");
        router.push("/");
        return;
      }
      toast.error("Path not found.");
    } else {
      setShowModal(false);
    }
  };



  const editHandler = () =>{
    console.log(pathUrl);    
    router.push('/path-edit/'+pathUrl)
  }
  return (
    <div className="relative w-20">
      <button
        className="float-right hover:bg-blue-200 rounded-full p-1 transition-colors duration-300"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <AiOutlineClose /> : <BsThreeDotsVertical />}
      </button>
      {showMenu && (
        <div
          id="menu"
          className="absolute top-6 right-5 flex flex-col gap-2 bg-blue-500 rounded-lg w-20"
        >
          <button
            className="text-yellow-500 pt-2 hover:font-bold"
            title="Edit this path"
            onClick={editHandler}
          >
            Edit
          </button>
          <button
            className="text-red-500 pb-2 hover:font-bold"
            title="Delete this path"
            onClick={() => {
              setShowMenu(false);
              setShowModal(true);
            }}
          >
            Delete
          </button>
        </div>
      )}
      <Confirmation
        showModal={showModal}
        msg="Are you sure you want to delete this path?"
        confirmationHandler={confirmationHandler}
      />
    </div>
  );
};

export default PathMenu;
