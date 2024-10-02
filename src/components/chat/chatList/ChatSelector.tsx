"use client";
import React, { useState } from "react";

type Props = {
  num?: number;
  setNum?: any;
};

const options = [
  {
    title: "Users",
    src: "",
  },
  {
    title: "Drivers",
    src: "",
  },
  {
    title: "Fulfillment centers",
    src: "",
  },
  {
    title: "Bulk Message",
    src: "",
  },
];

function ChatSelector({ num, setNum }: Props) {
  return (
    <div className="flex items-center bg-[#F8F9FA] font-barlow font-medium justify-evenly w-full p-1 text-[#344767] text-[12px] gap-2">
      <div
        onClick={() => setNum(1)}
        className={`${
          num === 1
            ? "bg-[#00B074] text-white shadow-md shadow-black/20 px-2 py-1 rounded-md"
            : ""
        } flex items-center justify-center cursor-pointer transition-all ease-in duration-200`}
      >
        <p>Users</p>
      </div>

      <div
        onClick={() => setNum(2)}
        className={`${
          num === 2
            ? "bg-[#00B074] text-white shadow-md shadow-black/20 px-2 py-1 rounded-md"
            : ""
        } flex items-center justify-center cursor-pointer transition-all ease-in duration-200`}
      >
        <p>Drivers</p>
      </div>

      <div
        onClick={() => setNum(3)}
        className={`${
          num === 3
            ? "bg-[#00B074] text-white shadow-md shadow-black/20 px-2 py-1 rounded-md"
            : ""
        } flex items-center justify-center cursor-pointer transition-all ease-in duration-200`}
      >
        <p>Fulfillment centers</p>
      </div>

      <div
        onClick={() => setNum(4)}
        className={`${
          num === 4
            ? "bg-[#00B074] text-white shadow-md shadow-black/20 px-2 py-1 rounded-md"
            : ""
        } flex items-center justify-center cursor-pointer transition-all ease-in duration-200`}
      >
        <p>Bulk Message</p>
      </div>
    </div>
  );
}

export default ChatSelector;
