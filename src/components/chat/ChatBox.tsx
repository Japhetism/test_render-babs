import React from "react";
import WaveSurfer from "wavesurfer.js";
import ChatHeader from "./chatBoxElements/chatHeader";
import ChatFooter from "./chatBoxElements/chatFooter";
import ChatScreen from "./chatBoxElements/chatScreen";

const ChatBox = () => {
  return (
    <div className="bg-white rounded-[5px] border border-[#ebebeb] order-3 lg:col-start-3 lg:col-end-7 w-full flex flex-col justify-start items-start xl:gap-6 lg:gap-4 gap-3 lg:-mt-0 -mt-3 ">
      <ChatHeader />
      <ChatScreen />
      <ChatFooter />
    </div>
  );
};

export default ChatBox;
