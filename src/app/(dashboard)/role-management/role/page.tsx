"use client";

import React from "react";
import { Button, Select } from "@/components";
import OrdersTable from "@/components/orders/orderTable";
import RolesTable from "@/components/role-management/roleTable";
import CustomerMapGraph from "@/components/dashboard/GraphBoard/CustomerMapGraph";
import { VertIcon } from "../../../../../public/assets/icons/dashboardIcons";
import TotalRevenueGraph from "@/components/dashboard/GraphBoard/TotalRevenueGraph";

const RolesManagementPage = () => {
  const testArray: number[] = [1, 2, 3, 4, 5];

  const [activeTab, setTabActive] = React.useState(1);
  console.log(activeTab);
  return (
    <div className="flex flex-col items-start justify-start w-full font-barlow">
      <div className="flex justify-between w-full mb-1">
        <div className="flex flex-col items-start justify-normal">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Revenue summary
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            List of recorded revenue
          </p>
        </div>
      </div>
      <div className="flex justify-between w-full gap-7">
        <div className="w-8/12">
          <RolesTable
            title={"Revenue"}
            subTitle={"List of recorded revenue"}
            testArray={testArray}
            location={"Lagos"}
            amount={"N 3,200,989"}
            borderColor={"border-[#3BB77E]"}
          />
        </div>

        <div className=" bg-white w-[37%] rounded-2xl shadow-sm font-barlow p-7">
          <div className="flex justify-between mb-3">
            <p className="font-bold text-2xl text-[#464255]"> Customer Map </p>
            <span>
              <Select
                bodyClassName="flex me-2"
                selectClassName="p-2 flex pe-7"
                iconClassName="w-4 top-[16px] right-[10px]"
              >
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="city1"
                >
                  Weekly
                </option>
              </Select>
            </span>
          </div>
          <CustomerMapGraph />
        </div>
      </div>

      <div className=" flex items-center bg-white w-3/5 rounded-2xl shadow-sm font-barlow py-7 pe-7">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        ></div>
        <div className=" bg-white font-barlow ps-4">
          <p className="font-bold text-2xl text-[#464255]"> Total Revenue</p>
          <TotalRevenueGraph />
        </div>
      </div>
    </div>
  );
};

export default RolesManagementPage;
