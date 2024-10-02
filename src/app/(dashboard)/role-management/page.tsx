"use client";

import React, { useState } from "react";
import { Button, Select } from "@/components";
import OrdersTable from "@/components/orders/orderTable";
import RolesTable from "@/components/role-management/roleTable";
import CustomerMapGraph from "@/components/dashboard/GraphBoard/CustomerMapGraph";
import { VertIcon } from "../../../../public/assets/icons/dashboardIcons";
import TotalRevenueGraph from "@/components/dashboard/GraphBoard/TotalRevenueGraph";
import Image, { StaticImageData } from "next/image";
import Inventory from "@/components/role-management/inventory";
import Admins from "@/components/role-management/admins";

const RolesManagementPage = () => {
  const testArray: number[] = [1, 2, 3, 4, 5];

  const [activeTab, setTabActive] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start justify-start w-full font-barlow">
      <div className="flex justify-between w-full mb-1">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Role | <span className="font-normal">management</span>
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-medium text-[#a3a3a3] mb-5">
            role management page
          </p>

          <div className="w-full bg-[#FDFDFD] border-e border-[#243c5a] p-9 ">
            <div className="flex items-center mb-8 relative">
              <div
                className="flex mx-auto py-5 px-9 border rounded-full items-center border-[#B7B7B7] gap-5"
                style={{
                  marginRight: activeTab === 3 ? "0px !important" : "",
                }}
              >
                <span
                  className="border rounded-full border-[#B9BBBD] py-3 px-4 text-[#A3A3A3] font-medium text-base cursor-pointer"
                  onClick={() => setTabActive(1)}
                  style={{ color: `${activeTab === 1 ? "#3BB77E" : ""}` }}
                >
                  Inventory{" "}
                </span>
                <span
                  className="border rounded-full border-[#B9BBBD] py-3 px-4 text-[#A3A3A3] font-medium text-base cursor-pointer"
                  onClick={() => setTabActive(2)}
                  style={{
                    color: `${activeTab === 2 ? "#3BB77E" : ""}`,
                  }}
                >
                  Revenue
                </span>{" "}
                <span
                  className="border rounded-full border-[#B9BBBD] py-3 px-6 text-[#A3A3A3] font-medium text-base cursor-pointer"
                  onClick={() => setTabActive(3)}
                  style={{ color: `${activeTab === 3 ? "#3BB77E" : ""}` }}
                >
                  Roles
                </span>
              </div>

              {activeTab === 3 && (
                <span className="rounded-full ml-auto bg-[#3BB77E] py-3 px-5 text-[#ffffff] font-medium text-sm absolute right-0" onClick={() => setShowModal(!showModal)}>
                  Add admin
                </span>
              )}
            </div>

            {activeTab === 1 && <Inventory />}

            {activeTab === 2 && (
              <>
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
                      <p className="font-bold text-2xl text-[#464255]">
                        {" "}
                        Customer Map{" "}
                      </p>
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
                    <p className="font-bold text-2xl text-[#464255]">
                      {" "}
                      Total Revenue
                    </p>
                    <TotalRevenueGraph />
                  </div>
                </div>
              </>
            )}

            {activeTab === 3 && <Admins showModal={showModal} setShowModal={setShowModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesManagementPage;
