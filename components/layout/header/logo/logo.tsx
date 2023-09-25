import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="header_link flex flex-row justify-between w-full">
      <Link href="/" className="text-white block font-bold text-xl self-start">
        SkillPath
      </Link>
    </div>
  );
};

export default Logo;
