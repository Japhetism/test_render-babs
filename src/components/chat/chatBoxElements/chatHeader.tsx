import Image from "next/image";
import React from "react";
import {
  ActiveNow,
  Phone,
  VideoCam,
} from "../../../../public/assets/icons/chat";

const ChatHeader = () => {
  return (
    <div className="w-full py-6 px-10 border-b">
      <div className="flex items-center justify-between">
        <h3 className="text-[25px] font-normal">Chat</h3>

        {/* user */}
        <div className="flex items-center">
          {/* avatar */}
          <div>
            <div
              className={`bg-inherit flex items-center justify-center w-[58px] h-[58px] p-[5px] m-0 rounded-full `}
            >
              <div className="h-full w-full bg-red-50 rounded-full relative overflow-hidden">
                <Image
                  fill
                  src={
                    "https://images.unsplash.com/photo-1493916665398-143bdeabe500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="user image"
                  className="object-center object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-grow">
            <p className="text-[18px] font-normal">uff oh! world</p>
            <span className="text-[10px] text-black/20 flex items-center justify-start gap-1 tracking-wide">
              Active Now <ActiveNow />
            </span>
          </div>
        </div>

        {/* call icons */}
        <div className="flex items-center justify-center gap-10">
          <div>
            <Phone />
          </div>
          <div>
            <VideoCam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
