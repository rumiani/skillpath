import Link from "next/link";
import React from "react";

const LoginBtn = () => {
  return (
    <div>
      <Link href="/login" className="text-gray-100">
        Log in
      </Link>
    </div>
  );
};

export default LoginBtn;
