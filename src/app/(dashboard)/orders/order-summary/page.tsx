"use client";

import React from "react";
import { Select } from "@/components";

type Props = {};

const testProducts = [
  {
    id: 1,
    name: "Biscuits",
    quantity: 50,
    price: 60,
  },
  {
    id: 2,
    name: "Potato Chips",
    quantity: 30,
    price: 30,
  },
  {
    id: 3,
    name: "Coca-cola bottle",
    quantity: 500,
    price: 2000,
  },
  {
    id: 4,
    name: "Chocolate cake",
    quantity: 10,
    price: 300,
  },
  {
    id: 5,
    name: "Milk cake",
    quantity: 20,
    price: 600,
  },
  {
    id: 6,
    name: "Bread",
    quantity: 40,
    price: 100,
  },
  {
    id: 7,
    name: "Can coke",
    quantity: 60,
    price: 700,
  },
  {
    id: 8,
    name: "Milk bottle",
    quantity: 90,
    price: 3000,
  },
  {
    id: 9,
    name: "Chocolate Ice-cream",
    quantity: 20,
    price: 50,
  },
  {
    id: 10,
    name: "Marshmallo packets",
    quantity: 10,
    price: 100,
  },
];

function page({}: Props) {
  const testArray: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex justify-between w-full mb-10">
        <div className="flex flex-col items-start justify-normal">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Order summary
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            Order summary list of products
          </p>
        </div>
      </div>
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>

        <div className="ps-3 w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Order summary list
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                Recorded list of orders
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
                {testProducts.map((data) => (
                  <tr
                    style={{
                      backgroundColor:
                        data.id % 2 === 0 ? "#F9FAFB" : "#ffffff",
                    }}
                    className="p-4 font-inter text-[#111827]"
                    key={data.id}
                  >
                    <td className="px-1 py-4 text-sm ">{data.name}</td>
                    <td className="px-1 py-4 text-sm font-semibold">
                      {data.quantity}
                    </td>

                    <td className="px-1 py-4 text-sm"> $ {data.price} </td>
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
    </>
  );
}

export default page;
