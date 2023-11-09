import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiWrite } from "react-icons/tfi";
import { IoMdOptions } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import PrimaryIcon from "../../icon/primaryIcon/primaryIcon";

const Profile = () => {
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
          <PrimaryIcon url="/newpath">
            <TfiWrite className='text-xl' title="NEW PATH" />
          </PrimaryIcon>
          <PrimaryIcon url="/setting">
            <LuSettings className='text-xl' title="Settings" />
          </PrimaryIcon>
          <PrimaryIcon url="/edit-profile">
            <IoMdOptions className='text-xl' title="Edit Profile" />
          </PrimaryIcon> 
        </div>
      </div>
    </>
  );
};

export default Profile;
