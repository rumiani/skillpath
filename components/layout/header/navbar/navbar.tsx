import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navLinks = [
{ name: "Home", link: "/" },
{ name: "Notes", link: "/notes" },
{ name: "Contact", link: "/contact" },
{ name: "FAQ", link: "/faq" },
];

const Navbar = ({mobileMenu}) => {

  return (
    <div
      className={`${mobileMenu?'flex':'hidden'} transition-all duration-1000 md:flex flex-grow md:flex-grow-0 md:w-fit items-start flex-col md:flex-row  md:m-0`}
    >
      {navLinks.map((link) => {
        return (
          <Link
            className="  cursor-pointer md:w-fit md:mx-4  text-lg md:p-0 mt-5 md:m-0 text-gray-300 hover:text-white transition-transform duration-300"
            key={link.link}
            href={link.link}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
