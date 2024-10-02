import Image from "next/image";
import React from "react";

type Props = {
  avatarSrc: string;
  name: string;
  lastSeen: string;
  data: string;
  isActive?: boolean;
  isOnline?: boolean;
};

const UserCard = ({
  avatarSrc,
  name,
  lastSeen,
  data,
  isActive,
  isOnline,
}: Props) => {
  return (
    <div className="flex items-center gap-3">
      {/* avatar */}
      <div>
        <div
          className={`bg-inherit flex items-center justify-center w-[58px] h-[58px] p-[5px] m-0 rounded-full ${
            isActive
              ? "border-[#55A99D] border-solid border-[2px]"
              : "border-none"
          }`}
        >
          <div className="h-full w-full bg-red-50 rounded-full relative overflow-hidden">
            <Image
              fill
              src={avatarSrc}
              alt="user image"
              className="object-center object-cover"
            />
          </div>
        </div>
      </div>

      {/* details */}
      <div className="flex-grow">
        <p className="flex items-center justify-between">
          {/* name */}
          <span
            className={`${
              !isOnline ? "text-[#BEBEBE]" : "text-black"
            } text-[18px] font-semibold`}
          >
            {name}
          </span>
          {/* lastseen */}
          <span
            className={`${
              !isOnline ? "text-[#BEBEBE]" : "text-[#C5BDBD]"
            } text-[14px]`}
          >
            {lastSeen}
          </span>
        </p>
        <p
          className={`${
            !isOnline ? "text-[#BEBEBE]" : "text-[#1D1313]/50"
          } text-[16px]`}
        >
          {data}..
        </p>
      </div>
    </div>
  );
};

export default UserCard;
