"use client";

import React, { useState } from "react";
import { Searchbar } from "@/components/chat/chatList";
import ActiveUsers from "./ActiveUsers";
import Chats from "./Chats";
import ChatSelector from "./ChatSelector";

const ChatList = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="bg-white rounded-[5px] border border-[#ebebeb] lg:order-2 order-1 lg:col-start-1 lg:col-end-3 flex flex-col items-start justify-start xl:px-[25px] xl:py-12 xl:gap-14 lg:px-[25px] lg:py-6 lg:gap-7 px-2 py-4 gap-4 w-full">
      <ChatSelector num={num} setNum={setNum} />
      <Searchbar />
      <ActiveUsers />
      <Chats num={num} />
    </div>
  );
};

export default ChatList;
