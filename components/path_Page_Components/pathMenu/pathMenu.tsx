import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditBtn from "./editBtn/editBtn";
import DeleteBtn from "./deleteBtn/deleteBtn";

const PathMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathMenuRef = useRef(null);

  useEffect(() => {
    onclick = (e) => {
      if (!pathMenuRef.current?.contains(e.target)) setShowMenu(false);
    };
  }, [showMenu]);

  return (
    <div className="relative w-20 ">
      <div ref={pathMenuRef}>
        <button
          className="float-right hover:bg-blue-200 rounded-full p-1 transition-colors duration-300"
          onClick={() => setShowMenu((prev) => !prev)}
          title={showMenu ? "Close" : "Options"}
        >
          <BsThreeDotsVertical />
        </button>
        {showMenu && (
          <div
            id="menu"
            className="absolute bg-blue-500 top-7 right-1 flex flex-col gap-2  w-20 rounded-lg"
          >
            <EditBtn />
            <DeleteBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default PathMenu;
