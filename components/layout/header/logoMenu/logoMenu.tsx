import Link from "next/link";
import React from "react";
import MenuIcon from "./menuIcon/menuIcon";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const LogoMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <Link href="/" className="text-white block font-bold text-xl self-start">
        SkillPath
      </Link>
      <div
        onClick={() => setMobileMenu(!mobileMenu)}
        className="md:hidden cursor-pointer text-xl self-start text-white"
      >
        {mobileMenu ? <AiOutlineClose /> : <FiMenu />}
      </div>
    </div>
  );
};

export default LogoMenu;
