import React from "react";
import { OrderlistUsers } from "@/utils/users";

type Props = {};

function PositiveRatings({}: Props) {
  return (
    <>
      <div className="flex justify-between w-full mb-5 mt-10">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Positive ratings
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
                Positive ratings
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                List of positive ratings
              </p>
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start">Drivers Name </th>
                  <th className="text-start"> ID NUMBER </th>
                  <th className="text-start"> Phone Number </th>
                  <th className="text-start"> EMAILS </th>
                  <th className="text-start"> Location </th>
                  <th className="text-start"> Review </th>
                  <th className="text-start"> DATE & TIME</th>
                  <th className="text-start"> Rating </th>
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
                    <td className="px-1 py-4 text-sm ">{data.IdNumber}</td>
                    <td className="px-1 py-4 text-sm font-semibold">
                      {data.phone}
                    </td>
                    <td className="px-1 py-4 text-sm "> {data.email}</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm "> This is review </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.date}
                    </td>
                    <td className="px-2 text-sm ">
                      <svg
                        width="154"
                        height="24"
                        viewBox="0 0 154 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6 0L16.5 7.9L25.2 9.2L18.9 15.3L20.4 24L12.6 19.9L4.8 24L6.3 15.3L0 9.2L8.7 7.9L12.6 0Z"
                          fill="#FFB800"
                        />
                        <path
                          d="M44.8 0L48.7 7.9L57.4 9.2L51.1 15.3L52.6 24L44.8 19.9L37 24L38.5 15.3L32.2 9.2L40.9 7.9L44.8 0Z"
                          fill="#FFB800"
                        />
                        <path
                          d="M76.9999 0L80.8999 7.9L89.5999 9.2L83.2999 15.3L84.7999 24L76.9999 19.9L69.1999 24L70.6999 15.3L64.3999 9.2L73.0999 7.9L76.9999 0Z"
                          fill="#FFB800"
                        />
                        <path
                          d="M109.2 0L113.1 7.9L121.8 9.2L115.5 15.3L117 24L109.2 19.9L101.4 24L102.9 15.3L96.6001 9.2L105.3 7.9L109.2 0Z"
                          fill="#FFB800"
                        />
                        <path
                          d="M141.4 0L145.3 7.9L154 9.2L147.7 15.3L149.2 24L141.4 19.9L133.6 24L135.1 15.3L128.8 9.2L137.5 7.9L141.4 0Z"
                          fill="#FFB800"
                        />
                      </svg>
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

export default PositiveRatings;
