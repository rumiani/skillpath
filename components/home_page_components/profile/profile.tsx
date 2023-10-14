import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { IoMdOptions } from "react-icons/io";
import { LuSettings } from "react-icons/lu";

const Profile = () => {
  const formElement = useRef(null);

  return (
    <>
      <div className=" bg-gray-200 p-2 my-4 flex flex-row justify-between w-full">
        <div className=" w-fit">
          <Link href="./member/maziar-rumiani">
            <Image
              width={85}
              height={85}
              alt="avatar"
              src="/assets/images/avatar.png"
            />
            <h2 className="font-bold self-end m-2">Maziar Rumiani</h2>
          </Link>
        </div>
        <div className="p-1">
          <Link href="/newpath">
            <TfiWrite
              title="NEW PATH"
              className="cursor-pointer my-2 w-7 h-7 hover:bg-gray-300 p-1 rounded-sm"
            />
          </Link>
          <Link href="/setting">



          <LuSettings
            title="Settings"
            className="cursor-pointer  my-2 w-7 h-7 hover:bg-gray-300 p-1 rounded-sm"
            />
            </Link>
          <Link href="/edit-profile">

          <IoMdOptions
            title="Edit Profile"
            className="cursor-pointer my-2  w-7 h-7 hover:bg-gray-300 p-1 rounded-sm"
            />
            </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
