import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import UserMenu from "./userMenu/userMenu";

const UserProfileMenu = () => {
  const { user } = useSelector((state) => state.appState);
  const [userMenu, setUserMenu] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const userMenuElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(user.loggedIn);
    
    setIsSmallDevice(window.innerWidth < 768);
    onclick = (e) => {
      console.log(5);
      if (!userMenuElement.current!.contains(e.target as Node)) {
        setUserMenu(false);
      }
    };
  }, []);
  const userMenuHandler = () => {
    setUserMenu(!userMenu);
  };

  if (!user.loggedIn) {
    return (
      <Link href="/login" className="text-gray-100">
        Log in
      </Link>
    );
  }

  return (
    <div className="cursor-pointer justify-start w-full md:w-10 md:mx-4 text-end text-lg  md:p-0 my-3 md:m-0 md:border-0 border-gray-300 border-t border-opacity-50 pt-3 md:pl-2">
      <div className=" relative w-24 md:h-8 flex justify-end flex-col">
        <div ref={userMenuElement} onClick={userMenuHandler} className="w-fit">
          <Image
            width={32}
            height={32}
            src={user.url || "/assets/images/avatar.png"}
            alt="profile"
          />
        </div>
        {(userMenu || isSmallDevice) && <UserMenu/>}
      </div>
    </div>
  );
};

export default UserProfileMenu;
