import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar/navbar";
import { useRouter } from "next/router";
import Logo from "./logo/logo";
import MenuBtn from "./menuBtn/menuBtn";
import UserProfileMenu from "./userAvatar/userProfileMenu";
import { useSelector } from "react-redux";
import LoginBtn from "./loginBtn/loginBtn";

const Header = () => {
  const { user } = useSelector((state) => state.appState);
  const router = useRouter();
  const HeaderPosition = router.pathname === "/newpath" ? "-mb-10" : "fixed";
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target?.classList?.contains("header_link")) setMobileMenu(false);
    });
  }, []);

  return (
    <div
      className={`${HeaderPosition} ${
        mobileMenu && "h-screen"
      } bg-white z-50 mx-auto px-4 sm:px-6 lg:px-8 top-0 left-0 right-0 max-w-screen-lg`}
    >
      <div
        className="relative bg-blue-500 flex justify-between flex-col md:flex-row align-top my-2 mx-auto px-5 py-4 rounded-3xl"
      >
        <div className="flex flex-row justify-between w-full h-8">
          <Logo />
          <MenuBtn mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        </div>
        <Navbar mobileMenu={mobileMenu} />
        {user.loggedIn ? (
          <UserProfileMenu mobileMenu={mobileMenu} />
        ) : (
          <LoginBtn />
        )}
      </div>
    </div>
  );
};

export default Header;
