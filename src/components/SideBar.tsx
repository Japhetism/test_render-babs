"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarRoutes } from "@/utils/sideBar";

type SidebarProps = {
  open: boolean;
  setOpen: (value: React.SetStateAction<boolean>) => void;
};

const SideBar = ({ open, setOpen }: SidebarProps) => {
  const currentRoute = usePathname();

  return (
    <aside
      className={`${
        open
          ? "z-[50] origin-left duration-300 w-4/6 md:w-4/12 scale-x-1 transition lg:pt-7 md:pt-20 pt-16"
          : "ml-[-100%] lg:ml-0 w-0 lg:w-auto lg:relative transform lg:transform-none scale-x-0 lg:col-span-1 lg:col-start-1"
      }  fixed h-screen flex flex-col items-center justify-start xl:gap-[72px] lg:gap-[54px] md:gap-9 gap-6 xl:py-[46px] lg:py-9 md:py-6 py-2 font-barlow bg-white z-[30]`}
    >
      {/*close sidebar*/}
      <svg
        onClick={() => setOpen(false)}
        className="w-5 h-4 md:left-5 left-3 top-6 absolute cursor-pointer lg:hidden"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z"
          fill="#525252"
        />
      </svg>

      <div className="flex flex-col justify-start items-start xl:gap-4 lg:gap-3 md:gap-2 gap-1 xl:px-[46px] lg:px-9 md:px-6 px-2">
        <h1 className="font-poppins text-[#333] xl:text-[45px] lg:text-3xl text-2xl font-bold">
          KOMAS500
        </h1>
        <p className="xl:text-lg lg:text-base text-sm font-medium text-[#b9bbbd]">
          Admin dashboard
        </p>
      </div>
      <div
        className={`w-full flex flex-col items-start justify-center xl:gap-10 lg:gap-[30px] gap-5`}
      >
        {sidebarRoutes.map((route) => (
          <div
            key={route.id}
            className={`flex items-center xl:gap-10 lg:gap-8 gap-5 w-full xl:pr-[46px] lg:pr-9 md:pr-6 pr-2 overflow-x-scroll whitespace-nowrap scrollbar-hide `}
          >
            <div
              className={`xl:w-2 lg:w-[6px] w-1 lg:h-10 h-8 rounded-md ${
                currentRoute.includes(route.path)
                  ? "bg-primary_100"
                  : "bg-transparent"
              }`}
            />
            <Link
              key={route.id}
              onClick={() => {
                setOpen(false);
                localStorage.removeItem("summaryProductId");
              }}
              href={route.path}
              className={`flex items-center justify-start xl:gap-6 lg:gap-4 gap-3 rounded-lg w-full xl:px-5 lg:px-[15px] px-[10px] group ${
                currentRoute.includes(route.path)
                  ? " bg-primary_200 text-primary_100 xl:py-4 lg:py-3 py-2"
                  : "text-[#464255] hover:text-primary_100"
              }`}
            >
              {route.icon}
              <p
                className={`xl:text-lg lg:text-base text-sm font-medium ${
                  currentRoute.includes(route.path)
                    ? " text-primary_100 font-semibold"
                    : "text-[#464255] group-hover:text-primary_100"
                }`}
              >
                {route.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
