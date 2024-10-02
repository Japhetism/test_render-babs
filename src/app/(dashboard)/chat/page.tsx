"use client";

import React, { useState } from "react";
import { ChatBox, ChatList } from "@/components";
const Chats = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex flex-col items-start justify-start xl:gap-8 lg:gap-5 gap-3 w-full h-full font-barlow">
      <div className="flex flex-col items-start justify-normal w-full">
        <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
          Chats<span className="font-normal"> | messages</span>
        </h2>
        <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
          Interact with customers via text and audio
        </p>
      </div>
      <div>
        <button
          onClick={() => setActive(!active)}
          className={`rounded-full bg-white xl:p-[10px] p-2 focus:outline-none cursor-pointer pointer-events-auto
         rotate-180`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`xl:w-6 xl:h-6 w-4 h-4 opacity-100`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
              fill="#253D4E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
              fill="#253D4E"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          active &&
          "grid lg:grid-cols-6 grid-cols-1 xl:gap-x-5 xl:gap-y-[10px] lg:gap-x-[14px] lg:gap-y-2 gap-y-5"
        } w-full`}
      >
        {active && <ChatList />}
        <ChatBox />
      </div>
    </div>
  );
};

export default Chats;
