import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const CancelBtn = () => {
  const router = useRouter()  
  return (
      <Link href={"/path/" + router.query.url}>
    <button className="cancelBtn">
        CANCEL
    </button>
      </Link>
  );
};

export default CancelBtn;
