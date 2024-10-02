"use client";
import React from "react";
import { Regions } from "../productUpload";
import Select from "../Select";
import Toggler from "../toggler/toggler";

const Inventory = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div>
          <p className="text-lg font-inter text-[#111827] font-semibold">
            Inventory
          </p>
          <p className="text-sm font-inter text-[#71717A] font-normal">
            Inventory list
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

      <table className="w-full font-inter">
        <thead>
          <tr className="bg-[#F9FAFB]">
            <th className="text-start text-[#6B7280] text-sm font-bold p-4">
              Vendor's Name
            </th>
            <th className="text-start text-[#6B7280] text-sm font-bold p-4">
              Location
            </th>
            <th className="text-start text-[#6B7280] text-sm font-bold p-4">
              Quantity
            </th>
            <th className="text-start text-[#6B7280] text-sm font-bold p-4">
              Total Stock Value
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-sm text-[#111827] font-normal p-4">
              Tony Briggs
            </td>
            <td className="text-sm text-[#6B7280] font-normal p-4">Lagos</td>
            <td className="text-base font-medium text-[#111827] p-4">10</td>
            <td className="text-base font-medium text-[#111827] p-4">
              N 5,000
            </td>
          </tr>

          <tr className="bg-[#F9FAFB]">
            <td className="text-sm text-[#111827] font-normal p-4">
              Tony Briggs
            </td>
            <td className="text-sm text-[#6B7280] font-normal p-4">Lagos</td>
            <td className="text-base font-medium text-[#111827] p-4">10</td>
            <td className="text-base font-medium text-[#111827] p-4">
              N 5,000
            </td>
          </tr>

          <tr>
            <td className="text-sm text-[#111827] font-normal p-4">
              Tony Briggs
            </td>
            <td className="text-sm text-[#6B7280] font-normal p-4">Lagos</td>
            <td className="text-base font-medium text-[#111827] p-4">10</td>
            <td className="text-base font-medium text-[#111827] p-4">
              N 5,000
            </td>
          </tr>

          <tr className="bg-[#F9FAFB]">
            <td className="text-sm text-[#111827] font-normal p-4">
              Tony Briggs
            </td>
            <td className="text-sm text-[#6B7280] font-normal p-4">Lagos</td>
            <td className="text-base font-medium text-[#111827] p-4">10</td>
            <td className="text-base font-medium text-[#111827] p-4">
              N 5,000
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Inventory;
