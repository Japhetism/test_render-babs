"use client";

import { usersData } from "@/utils/users";
import { AddChat } from "../../../../public/assets/icons/chat";
import Image from "next/image";

type Props = {};

function ActiveUsers({}: Props) {
  return (
    <div className="w-full">
      <span className="text-[12px] tracking-wider">Active users</span>

      <div className="w-full overflow-x-scroll scrollbar-effect">
        <div className="py-3 flex items-center gap-[7px] justify-start w-min">
          {/* add user */}
          <div className="bg-[#252525]/75 flex items-center justify-center w-[50px] h-[50px] p-0 m-0 rounded-full cursor-pointer">
            <AddChat />
          </div>

          {usersData.map((data) => (
            <>
              {/* all active users */}
              {data.isActive && (
                <div
                  key={data.id}
                  className="bg-inherit flex items-center justify-center w-[58px] h-[58px] p-[5px] m-0 rounded-full border-[#55A99D] border-solid border-[2px] "
                >
                  <div className="h-full w-full bg-red-50 rounded-full relative overflow-hidden">
                    <Image
                      fill
                      src={data.avatarSrc}
                      alt="user image"
                      className="object-center object-cover"
                    />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
