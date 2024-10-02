"use client";

import React, { useState } from "react";
import { OrderlistUsers } from "@/utils/users";
import { FormInput } from "@/components";
import Modal from "@/components/Modal";

type Props = {};

function DeliveryDriveres({}: Props) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="flex justify-between w-full mb-5 mt-10">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Delivery Drivers
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
          </>
        </div>
      </div>

      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>

        <div className="ps-3 w-full">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Delivery Drivers
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                List of registered delivery drivers
              </p>
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start  py-4 px-1"> Name </th>
                  <th className="text-start"> Phone Number </th>
                  <th className="text-start"> EMAILS </th>
                  <th className="text-start"> State</th>
                  <th className="text-start"> LGA </th>
                  <th className="text-start"> Center </th>
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
                    <td className="px-1 py-4 text-sm ">{data.name}</td>
                    <td className="px-1 py-4 text-sm font-semibold">
                      {data.phone}
                    </td>
                    <td className="px-1 py-4 text-sm "> {data.email}</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.location}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="submit"
              className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 px-4 rounded-md flex justify-center mt-5"
              onClick={() => setActive(true)}
            >
              Add New
            </button>

            <button
              type="submit"
              className="bg-white border-[2px] border-primary_100 text-primary_100 text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center mt-5"
            >
              Download All
            </button>
          </div>
        </div>
      </div>

      {active && (
        <Modal paddingTop="1%">
          <div className="h-full w-full relative">
            <div className="flex flex-col items-start justify-normal w-full px-10 mt-10">
              <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
                Add New Driver
              </h2>
            </div>
            <div className="w-full px-10 mt-5 flex flex-col justify-start gap-2">
              {/* driver name */}
              <FormInput
                name="Name"
                type="text"
                inputMode="text"
                placeholder=""
              />
              {/* email */}
              <FormInput
                name="Email"
                type="email"
                inputMode="email"
                placeholder=""
              />
              {/* phone */}
              <FormInput
                name="Phone"
                type="numeric"
                inputMode="numeric"
                placeholder=""
              />
              {/* state */}
              <FormInput
                name="State"
                type="text"
                inputMode="text"
                placeholder=""
              />
              {/* bank name */}
              <FormInput
                name="LGA"
                type="text"
                inputMode="text"
                placeholder=""
              />
              {/* driver location */}
              <FormInput
                name="Center"
                type="text"
                inputMode="text"
                placeholder=""
              />
            </div>
            <button
              onClick={() => setActive(false)}
              className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center mt-5 mb-3 ml-auto px-4 mr-10"
              // onClick={() => console.log("logged")}
            >
              Add Driver
            </button>
            <svg
              onClick={() => setActive(false)}
              className="w-5 h-4 top-5 right-5 absolute cursor-pointer"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z"
                fill="#525252"
              />
            </svg>
          </div>
        </Modal>
      )}
      
    </>
  );
}

export default DeliveryDriveres;
