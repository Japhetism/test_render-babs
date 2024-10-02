import React from "react";

type HeaderBoxProps = {
  amount: string;
  title: string;
  duration: string;
  icon: React.ReactNode;
  arrowIcon?: React.ReactNode;
  color: string;
};

const HeaderBox = ({
  amount,
  title,
  duration,
  icon,
  arrowIcon,
  color,
}: HeaderBoxProps) => {
  return (
    <div className="flex bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-4 items-center">
      <div
        className="border-e-[14px] w-1 h-28 rounded-tr-2xl rounded-br-2xl"
        style={{ borderColor: color }}
      ></div>
      <div
        className="rounded-full flex items-center justify-center p-6 mx-4"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-4xl font-bold font-barlow text-[#464255] truncate">
          {amount}
        </p>
        <p className="text-base font-normal text-[#464255] truncate">{title}</p>
        <p className="text-xs text-[#A3A3A3] flex">
          {arrowIcon} {duration}
        </p>
      </div>
    </div>
  );
};

export default HeaderBox;
