import React from "react";
import {
  AddFiles,
  MicIcon,
  SendMsg,
} from "../../../../public/assets/icons/chat";

const ChatFooter = () => {
  return (
    <div className="w-full py-4 px-10 border-t">
      <div className="flex items-center justify-between gap-3 ">
        <div className="bg-[#2A2A2A]/80 flex items-center justify-center w-[45px] h-[45px] p-0 m-0 rounded-full cursor-pointer">
          <AddFiles />
        </div>

        {/* inputs */}
        <div className="flex-grow">
          <input
            type="text"
            className="block xl:py-4 lg:py-[10px] py-2 xl:px-12 px-3 w-full rounded-sm focus:outline-none "
            placeholder="Send Message"
          />
        </div>

        {/* call icons */}
        <div className="flex items-center justify-center gap-5">
          <div>
            <SendMsg />
          </div>

          <div>
            <div className="bg-gradient-to-b from-[#55A99D] to-[#007665] flex items-center justify-center w-[50px] h-[50px] p-0 m-0 rounded-full cursor-pointer">
              <MicIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
