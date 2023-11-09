import React from "react";
import Link from "next/link";

const PrimaryIcon = ({ children, url }) => {
  return (
    <div className="cursor-pointer my-2 w-7 h-7 hover:bg-gray-300 p-1 rounded-sm">
      <Link href={url}>{children}</Link>
    </div>
  );
};

export default PrimaryIcon;
