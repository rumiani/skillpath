import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import UserMenu from "./userAvatarMenu/userAvatarMenu";
import UserAvatar from "./userAvatar";

const UserProfileMenu = ({ mobileMenu }) => {
  const { user } = useSelector((state) => state.appState);
  const [userMenu, setUserMenu] = useState(false);
  const userMenuElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !userMenuElement.current?.contains(e.target as Node) &&
        !userMenuElement.current?.contains(e.target as Node)
      ) {
        setUserMenu(false);
      }
    });
  }, []);

  return (
    <div
      className={`${
        mobileMenu ? "flex" : "hidden"
      } md:flex justify-start w-full md:w-10 md:mx-4 text-end text-lg  md:p-0 my-3 md:m-0 md:border-0 border-gray-300 border-t border-opacity-50 pt-3 md:pl-2 relative md:h-8 flex flex-col`}
      ref={userMenuElement}
    >
      <div className=" py-2 md:py-0  text-left text-gray-300 hover:text-white transition-transform duration-300">
        <UserAvatar
          userMenuHandler={() => setUserMenu(!userMenu)}
          url={user.url}
        />
        <UserMenu userMenu={userMenu} />
      </div>
    </div>
  );
};

export default UserProfileMenu;
