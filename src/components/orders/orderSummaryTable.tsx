"use client";
import React from "react";
import Select from "../Select";

type TableProps = {
  name?: string;
  quantity?: number;
  title?: string;
  subTitle?: string;
  amount?: number;
  date?: string;
  payment?: boolean;
  icon?: React.ReactNode;
  className?: string;
  borderColor?: string;
  testArray: number[];
};

interface Option {
  value: string;
  label: string;
}

const OrderSummaryTable = ({
  name,
  quantity,
  amount,
  title,
  subTitle,
  testArray,
  borderColor,
}: TableProps) => {
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

          <div className="flex self-start w-2/4">
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
                <th className="text-start  py-4 px-1">Product Name </th>
                <th className="text-start"> Product Quantity </th>
                <th className="text-start"> Product price </th>
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
                  <td className="px-1 py-4 text-sm ">{name}</td>
                  <td className="px-1 py-4 text-sm font-semibold">
                    {quantity}
                  </td>

                  <td className="px-1 py-4 text-sm "> $ {amount} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="submit"
          className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center ml-auto mt-5"
          // onClick={() => console.log("logged")}
        >
          Download Summary
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryTable;
