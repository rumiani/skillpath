import Confirmation from "@/components/confirmation/confirmation";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { deletePath } from "@/pages/api/api";

const DeleteBtn = () => {
    const [showModal, setShowModal] = useState(false);
    
    const router = useRouter();
    const pathUrl = router.query.url;
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
  return (
    <>
      <button
        className="text-red-500 pb-2 hover:font-bold"
        title="Delete this path"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      <Confirmation
        showModal={showModal}
        msg="Are you sure you want to delete this path?"
        confirmationHandler={confirmationHandler}
      />
    </>
  );
};

export default DeleteBtn;
