import Link from "next/link";
import React from "react";

const UserMenu = () => {
  return (
    <div className="w-fit  md:absolute bg-opacity-90  bg-blue-500 md:rounded-lg md:w-32 md:right-10  md:top-[50px] flex flex-col md:shadow-gray-50 md:shadow-sm">
      <Link
        href={"/"}
        className="header_link p-2 text-left text-gray-300 hover:text-white transition-transform duration-300"
      >
        Profile
      </Link>
      <button className="header_link p-2 text-red-700 hover:text-red-500 w-fit">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
