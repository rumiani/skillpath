import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Paths", link: "/paths" },
  { name: "Contact", link: "/contact" },
  { name: "FAQ", link: "/faq" },
];

const Navbar = ({ mobileMenu }) => {
  
  return (
    <div
      className={`${
        mobileMenu ? "flex" : "hidden"
      } md:flex w-full mt-2 transition-all duration-1000 md:w-fit items-start flex-col md:flex-row md:m-0 px-4`}
    >
      {navLinks.map((link) => {
        return (
          <Link
            className="header_link cursor-pointer md:w-fit md:mx-4  text-lg md:p-0 mt-5 md:m-0 text-gray-300 hover:text-white transition-transform duration-300"
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
