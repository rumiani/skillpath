import Link from "next/link";
import React from "react";

const UserMenu = ({userMenu}) => {
  
  return (
    <div className={`${userMenu?'md:flex':'md:hidden'} w-fit  md:absolute bg-opacity-90  bg-blue-500 md:rounded-lg md:w-32 md:right-0  md:top-[50px] flex flex-col md:shadow-gray-50 md:shadow-sm`}>
      <Link
        href={"/"}
        className="header_link p-2 text-left text-gray-300 hover:text-white transition-transform duration-300"
      >
        Profile
      </Link>
      <Link
      href={"/login"} className="header_link p-2 text-red-700 hover:text-red-500 w-fit">
        Log out
      </Link>
    </div>
  );
};

export default UserMenu;
