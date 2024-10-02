"use client";

import Image from "next/image";
import WaveSurfer from "./waveSurfer";

const ChatScreen = () => {
  return (
    <div className="flex-grow w-full relative px-5">
      <p className="userChat">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        impedit, nesciunt earum
      </p>

      <div className="flex">
        <div className="flex items-end justify-center">
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
        </div>
        <div>
          <p className="reciverChat">hello</p>
          <p className="reciverChat">hii</p>
          <p className="reciverChat">whats up </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-end justify-center w-max-[300px]">
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
        </div>
        <div className="w-full">
          <WaveSurfer />
        </div>
      </div>

      <p className="userChat">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        impedit, nesciunt earum
      </p>
    </div>
  );
};

export default ChatScreen;
