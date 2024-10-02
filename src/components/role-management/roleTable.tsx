"use client";
import React from "react";
import { Regions } from "../productUpload";
import Select from "../Select";
import Toggler from "../toggler/toggler";
// import Switch from "react-js-switch";

type TableProps = {
  title?: string;
  subTitle?: string;
  location?: string;
  amount?: string;
  icon?: React.ReactNode;
  className?: string;
  borderColor?: string;
  testArray: number[];
};

interface Option {
  value: string;
  label: string;
}

const RolesTable = ({
  location,
  amount,
  borderColor,
  title,
  subTitle,
  className,
  testArray,
}: TableProps) => {
  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (selectedItems: Option[]) => {
    console.log(selectedItems);
  };
  return (
    <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
      <div
        className={`${borderColor} border-e-[6px] w-1 h-36 rounded-2xl`}
      ></div>

      <div className="ps-3 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-xl text-[#111827] font-inter ">
              {title}
            </p>
            <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
              {subTitle}
            </p>
          </div>

          <div className="flex self-start w-[65%]">
            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Category
              </option>
            </Select>
            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Location
              </option>
            </Select>
            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Day
              </option>
            </Select>

            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Month
              </option>
            </Select>

            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Year
              </option>
            </Select>
          </div>
        </div>

        <div className="w-full">
          <table className="w-full">
            <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
              <tr>
                <th className="text-start  py-4 px-1"> Location </th>
                <th className="text-start"> Revenue </th>
              </tr>
            </thead>
            <tbody>
              {testArray.map((item, index) => (
                <tr
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#F9FAFB",
                  }}
                  className="p-4 font-inter text-[#111827]"
                  key={index}
                >
                  <td className="px-1 py-4 text-sm "> {location} </td>
                  <td className="px-1 py-4 text-sm "> {amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          style={{ padding: 4 }}
          className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow ms-5 w-28 p-1 rounded-md ml-auto flex justify-center"
          // onClick={() => console.log("logged")}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default RolesTable;
