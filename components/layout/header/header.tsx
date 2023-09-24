import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar/navbar";
import { useRouter } from "next/router";
import LogoMenu from "./logoMenu/logoMenu";
import UserProfileMenu from "./userProfileMenu/userProfileMenu";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const HeaderPosition = router.pathname === "/newpath" ? "-mb-10" : "fixed";
  const [mobileMenu, setMobileMenu] = useState(false);

  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    onclick = (e) => {
      if (mobileMenu && !menu.current!.contains(e.target as Node)) {
        setMobileMenu(false);
      }
    };
  }, [mobileMenu]);
  return (
    <div
      className={`${HeaderPosition} bg-white z-50 mx-auto px-4 sm:px-6 lg:px-8 top-0 left-0 right-0 max-w-screen-lg`}
    >
      <div
        className="bg-blue-500 flex justify-between flex-col md:flex-row align-top my-2 mx-auto px-5 py-4 rounded-3xl"
      >
        <LogoMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <div         ref={menu}

          className={`${
            mobileMenu ? "flex" : "hidden"
          } max-w-xs md:max-w-none p-4 md:p-0 w-full md:w-fit mx-auto md:mx-0 flex flex-col md:flex-row`}
        >
          <div
            className={`${mobileMenu ? "flex" : "hidden"} md:flex flex-col md:flex-row `}
          >dasdfsasdfadsfsdfsafds
            <Navbar mobileMenu={mobileMenu} />

            {/* <UserProfileMenu /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
