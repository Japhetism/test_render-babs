"use client";
import OrdersTable from "@/components/orders/orderTable";
import { OrderlistUsers } from "@/utils/users";
import React from "react";

type Props = {};

function page({}: Props) {
  const testArray: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex justify-between w-full mb-10">
        <div className="flex flex-col items-start justify-normal">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Canceled order
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            list for canceled product order
          </p>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-effect">
        <table className="min-w-full">
          <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
            <tr className="font-poppins tracking-wide">
              <th className="tableHead">Name</th>
              <th className="tableHead">Phone Number</th>
              <th className="tableHead">Emails</th>
              <th className="hidden sm:table-cell tableHead">Location</th>
              <th className="hidden sm:table-cell tableHead">ID Number</th>
              <th className="hidden sm:table-cell tableHead">Amount</th>
              <th className="hidden sm:table-cell tableHead">Date & Time</th>
              <th className="hidden sm:table-cell tableHead">Payment</th>
              <th className="hidden sm:table-cell tableHead">View order</th>
              <th className="hidden sm:table-cell tableHead">Confirm</th>
            </tr>
          </thead>
          <tbody>
            {OrderlistUsers.map((data) => (
              <tr
                style={{
                  backgroundColor: data.id % 2 === 0 ? "#ffffff" : "#F9FAFB",
                }}
                className="p-4 font-inter text-[#111827]"
                key={data.id}
              >
                <td className="tableBody">{data.name}</td>
                <td className="tableBody md:pe-[50px]">{data.phone}</td>
                <td className="tableBody">{data.email}</td>
                <td className="hidden sm:table-cell tableBody">
                  {data.location}
                </td>
                <td className="hidden sm:table-cell tableBody pe-[40px]">
                  {data.IdNumber}
                </td>
                <td className="hidden sm:table-cell tableBody">
                  N {data.amount}
                </td>
                <td className="hidden sm:table-cell tableBody">{data.date}</td>
                <td className="hidden sm:table-cell tableBody">
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
                <td className="hidden sm:table-cell tableBody">
                  <div className="border p-[2px] border-[#3BB77E] rounded-md font-normal text-[10px] flex items-center justify-center text-[#3BB77E] cursor-pointer">
                    view
                  </div>
                </td>
                <td className="hidden sm:table-cell tableBody">
                  Row 1, Column 10
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default page;
