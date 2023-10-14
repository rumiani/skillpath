import Image from "next/image";
import React from "react";

const UserAvatar = ({ userMenuHandler, url }) => {
  return (
    <div
      onClick={userMenuHandler}
      className="w-7 h-7 md:cursor-pointer"
    >
      <Image
        width={42}
        height={42}
        src={url || "/assets/images/avatar.png"}
        alt="profile"
      />
    </div>
  );
};

export default UserAvatar;
