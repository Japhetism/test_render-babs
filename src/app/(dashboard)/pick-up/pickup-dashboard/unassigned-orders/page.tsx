"use client";
import { OrderlistUsers } from "@/utils/users";
import Link from "next/link";
import React from "react";

type Props = {};

function UnassignedOrders({}: Props) {
  return (
    <>
      <div className="flex justify-between w-full mb-5 mt-10">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Unassigned orders
          </h2>
        </div>

        <div className="flex bg-[#F8F9FA] rounded-lg p-1">
          <>
            <div
              className="text-[#344767] font-normal font-roboto flex items-center justify-center p-2 rounded-md mx-1 w-[131px] cursor-pointer"
              style={{
                boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
                color: "#3BB77E",
                borderRadius: "0.375rem",
              }}
            >
              All
            </div>
            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center p-2 rounded-md mx-1 w-[131px] cursor-pointer">
              State
            </div>
            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center p-2 rounded-md mx-1 w-[131px] cursor-pointer">
              LGA
            </div>
            <div className="text-[#344767] font-normal font-roboto flex items-center justify-center p-2 rounded-md mx-1 w-[131px] cursor-pointer">
              Location
            </div>
          </>
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
                Unassigned orders list
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                List of orders unassigned
              </p>
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start"> ID NUMBER </th>
                  <th className="text-start"> Location </th>
                  <th className="text-start"> AMOUNT </th>
                  <th className="text-start"> DATE & TIME</th>
                  <th className="text-start"> PAYMENT </th>
                  <th className="text-start"> Order Assignment </th>
                </tr>
              </thead>
              <tbody>
                {OrderlistUsers.map((data) => (
                  <tr
                    style={{
                      backgroundColor:
                        data.id % 2 === 0 ? "#ffffff" : "#F9FAFB",
                    }}
                    className="p-4 font-inter text-[#111827]"
                    key={data.id}
                  >
                    <td className="px-1 py-4 text-sm ">{data.IdNumber}</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm "> N {data.amount} </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.date}
                    </td>
                    <td className="px-1 py-4">
                      {data.payment ? (
                        <span className="px-2 py-1  text-[8px] text-[#03543F] text-center bg-[#DEF7EC] rounded-xl">
                          Completed
                        </span>
                      ) : (
                        <span className="px-2 py-1  text-[8px] text-[#FF5B5B] text-center bg-[#F5DBE0] rounded-xl">
                          On Delivery
                        </span>
                      )}
                    </td>
                    <td className="px-2 text-sm">

                      <Link
                        href={`/pick-up/assign/${data.IdNumber.slice(
                          1
                        )}`}
                      >
                        <div className="max-w-[40%] p-[2px] bg-[#3BB77E] rounded-md font-normal text-[10px] flex items-center justify-center text-white cursor-pointer">
                          Assign
                        </div>
                      </Link>

                    </td>
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
            Download all
          </button>
        </div>
      </div>
    </>
  );
}

export default UnassignedOrders;
