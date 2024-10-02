import { OrderlistUsers } from "@/utils/users";
import React from "react";
import PaymentFilters from "../filters";

type Props = {};

const dateSelector = [
  {
    id: 1,
    name: "Day",
  },
  {
    id: 2,
    name: "Month",
  },
  {
    id: 3,
    name: "Year",
  },
];

const LocationSelector = [
  {
    id: 1,
    name: "State",
  },
  {
    id: 2,
    name: "LGA",
  },
  {
    id: 3,
    name: "Center",
  },
];

function FulfillmentInvoice({}: Props) {
  return (
    <>
      {/* unpaid */}
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 my-10">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>

        <div className="ps-3 w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Total Monthly Earnings
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
               on Vendors' Products
              </p>
            </div>

            {/* add filters */}

            <div className="flex items-center justify-between w-[60%]">
              <PaymentFilters selector={dateSelector} />
              <PaymentFilters selector={LocationSelector} />
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start  py-4 px-1"> Product Name </th>
                  <th className="text-start"> Vendor Name </th>
                  <th className="text-start"> Customer Name </th>
                  <th className="text-start"> Qty </th>
                  <th className="text-start"> Unit Vend Item Price</th>
                  <th className="text-start"> Total Vend Price</th>
                  <th className="text-start"> Category </th>
                  <th className="text-start"> Markup </th>
                  <th className="text-start"> Selling Price</th>
                  <th className="text-start"> Shopmates </th>
                  <th className="text-start"> Profit </th>
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
                      0008778887
                    </td>
                    <td className="px-1 py-4 text-sm "> Bank name</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.IdNumber}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm ">
                      {" "}
                      <span className="line-through font-semibold">N</span>{" "}
                      {data.amount}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {data.date}
                    </td>
                    <td className="px-1 py-4">
                      <span className="px-2 py-1  text-[8px] text-[#CE871A] text-center bg-[#F9EAD3] rounded-xl">
                        Pending
                      </span>
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
            Download
          </button>
        </div>
      </div>


      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 my-10">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>

        <div className="ps-3 w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Fulfillment Center Invoice
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                List of invoice for fulfillment centers
              </p>
            </div>

            {/* add filters */}

            <div className="flex items-center justify-between w-[60%]">
              <PaymentFilters selector={dateSelector} />
              <PaymentFilters selector={LocationSelector} />
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start  py-4 px-1"> Name </th>
                  <th className="text-start"> Account No. </th>
                  <th className="text-start"> Bank Name </th>
                  <th className="text-start"> Location </th>
                  <th className="text-start"> Delivered product IDs </th>
                  <th className="text-start"> AMOUNT </th>
                  <th className="text-start"> DATE & Time</th>
                  <th className="text-start"> status </th>
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
                      0008778887
                    </td>
                    <td className="px-1 py-4 text-sm "> Bank name</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.IdNumber}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm ">
                      {" "}
                      <span className="line-through font-semibold">N</span>{" "}
                      {data.amount}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {data.date}
                    </td>
                    <td className="px-1 py-4">
                      <span className="px-2 py-1  text-[8px] text-[#CE871A] text-center bg-[#F9EAD3] rounded-xl">
                        Pending
                      </span>
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
            Download
          </button>
        </div>
      </div>

      {/* paid */}
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 my-10">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>

        <div className="ps-3 w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                Paid Fulfillment Center Invoice
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                List of paid invoice for fulfillment centers
              </p>
            </div>

            <div className="flex items-center justify-between w-[60%]">
              <PaymentFilters selector={dateSelector} />
              <PaymentFilters selector={LocationSelector} />
            </div>
          </div>

          <div className="w-full">
            <table className="w-full">
              <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                <tr>
                  <th className="text-start  py-4 px-1"> Name </th>
                  <th className="text-start"> Account No. </th>
                  <th className="text-start"> Bank Name </th>
                  <th className="text-start"> Location </th>
                  <th className="text-start"> Delivered product IDs </th>
                  <th className="text-start"> AMOUNT </th>
                  <th className="text-start"> DATE & Time</th>
                  <th className="text-start"> status </th>
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
                      0008778887
                    </td>
                    <td className="px-1 py-4 text-sm "> Bank name</td>
                    <td className="px-1 py-4 text-sm "> {data.location} </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {" "}
                      {data.IdNumber}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm ">
                      {" "}
                      <span className="line-through font-semibold">N</span>{" "}
                      {data.amount}{" "}
                    </td>
                    <td className="px-1 py-4 text-sm text-[#6B7280] ">
                      {data.date}
                    </td>
                    <td className="px-1 py-4">
                      <span className="px-2 py-1  text-[8px] text-[#045540] text-center bg-[#DEF7EC] rounded-xl">
                        Paid
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="submit"
            className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center ml-auto mt-5"
          >
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default FulfillmentInvoice;
