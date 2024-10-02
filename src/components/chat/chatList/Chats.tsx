import React from "react";
import UserCard from "./UserCard";
import { usersData } from "@/utils/users";

type Props = {
  num?: number;
};

const Chats = ({ num }: Props) => {
  let details =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate sed voluptatem, nesciunt soluta amet corrupti neque magnam similique ullam, provident reiciendis iusto earum quae accusamus molestias, sapiente vero veniam.";
  const data = details.substring(30, details.length);
  const useable = details.split(data)[0];

  return (
    <div className="w-full">
      <h2 className="mb-10 text-[20px] font-normal">Message</h2>

      {/* online */}
      {num === 2 || num === 3 || num === 4 ? (
        <div className="flex items-center justify-between">
          <span className="text-[12px] tracking-wider">
            {num === 4 ? "Drivers" : "online"}
          </span>

          <div className="flex bg-[#F8F9FA] rounded-lg">
            <div
              className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer shadow-sm shadow-black/20"
              style={{
                color: "#3BB77E",
                borderRadius: "0.375rem",
              }}
            >
              All
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              State
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              LGA
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              Center
            </div>
          </div>
        </div>
      ) : (
        <span className="text-[12px] tracking-wider">online</span>
      )}

      {/* list */}
      <div className="mt-5 flex flex-col items-start gap-2">
        {/* card */}

        {usersData.map(
          (user) =>
            user.isOnline && (
              <UserCard
                key={user.id}
                avatarSrc={user.avatarSrc}
                name={user.name}
                lastSeen={user.lastSeen}
                isActive={user.isActive}
                isOnline
                data={useable}
              />
            )
        )}
      </div>

      <hr className="border-[#040404]/20 my-5 mb-10" />

      {/* offline */}
      {num === 4 ? (
        <div className="flex items-center justify-between">
          <span className="text-[12px] tracking-wider">
            Fulfillment centers
          </span>

          <div className="flex bg-[#F8F9FA] rounded-lg">
            <div
              className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer shadow-sm shadow-black/20"
              style={{
                color: "#3BB77E",
                borderRadius: "0.375rem",
              }}
            >
              All
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              State
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              LGA
            </div>

            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-[10px] rounded-md mx-1 cursor-pointer">
              Center
            </div>
          </div>
        </div>
      ) : (
        <span className="text-[12px] tracking-wider">offline</span>
      )}

      {/* list */}
      <div className="mt-5 flex flex-col items-start gap-2">
        {/* card */}

        {usersData.map(
          (user) =>
            !user.isOnline && (
              <UserCard
                key={user.id}
                avatarSrc={user.avatarSrc}
                name={user.name}
                lastSeen={user.lastSeen}
                isActive={user.isActive}
                isOnline={user.isOnline}
                data={useable}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Chats;
