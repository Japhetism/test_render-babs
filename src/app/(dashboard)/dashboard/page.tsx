"use client";

import React, { useEffect, useState } from "react";
import {
  UploadIcon,
  NairaIcon,
  FunnelIcon,
  DoubledChevronDown,
  ChevronDownIcon,
  ExportIcon,
  VertIcon,
  ShoppingCartIcon,
  UserIcon,
  OrderListIcon,
  OrderCompletedIcon,
  OrderCancelIcon,
} from "../../../../public/assets/icons/dashboardIcons";
import { Button } from "@/components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HeaderBox from "@/components/dashboard/HeaderBox";
import OrderHistoryTable from "@/components/dashboard/OrderHistoryTable";
import GraphBoard from "@/components/dashboard/GraphBoard/OrderAnalyticsGraph";
import OrderAnalyticsGraph from "@/components/dashboard/GraphBoard/OrderAnalyticsGraph";
import TotalRevenueGraph from "@/components/dashboard/GraphBoard/TotalRevenueGraph";
import CustomerMapGraph from "@/components/dashboard/GraphBoard/CustomerMapGraph";
import { useUserStore } from "@/state";
import { getDashboardValues } from "@/mockresponses/dashboardValues";

const Dashboard = () => {
  const user = useUserStore(_ => _.user);
  const percentage: number = 66;
  const [dashboardValues, setDashboardValues] = useState<any>({});

  useEffect(() => {
    const values = getDashboardValues();
    setDashboardValues(values);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full font-barlow">
      {/* first dashboard row */}
      <div className="flex justify-between w-full mb-7">
        <div className="flex flex-col items-start justify-normal">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Dashboard
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            Hi, {user!.fullName}. Welcome back to Komas500 Admin!
          </p>
        </div>

        <div className="flex">
          <Button
            type="submit"
            className="bg-primary_100 text-white text-center text-base font-semibold hover:opacity-80 w-[263px] font-barlow me-6 "
            // onClick={() => console.log("logged")}
          >
            <div className="me-2 bg-primary_500">
              <UploadIcon />
            </div>
            Upload product
          </Button>

          <div className="w-[263px] flex rounded-2xl shadow-sm bg-white items-center px-5 py-4">
            <div className="bg-[#D9F3EA] rounded-2xl flex items-center justify-center p-3 me-2">
              <FunnelIcon />
            </div>
            <div className="pe-3">
              <p className="text-lg fon-medium text-[#3E4954]">
                Filter Period{" "}
              </p>
              <p className="text-xs text-[#3E4954]">
                13 Jun 2023 - 21 Jul 2023
              </p>
            </div>
            <ChevronDownIcon />
          </div>
        </div>
      </div>

      <div className="flex space-x-6 w-full">
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalRevenue}
            title="Total Monthly Revenue"
            icon={<NairaIcon width="30" height="30" fill="#ffffff" />}
            duration="129290"
            color="#66aaff"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
            //     <ArrowUpIcon />
            //   </span>
            // }
          />
        </div>
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalCompletedSales}
            title="Total Monthly Completed Sales"
            icon={<ShoppingCartIcon width="30" height="30" fill="#ffffff" />}
            duration="339001"
            color="#3bb77e80"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
            //     <ArrowUpIcon />
            //   </span>
            // }
          />
        </div>
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalSignupUsers}
            title="Total Signup Users"
            icon={<UserIcon width="30" height="30" fill="#ffffff" />}
            duration="30000"
            color="#66ff7f"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#ff5b5b1a]">
            //     <ArrowDownIcon />
            //   </span>
            // }
          />
        </div>
      </div>

      <div className="flex space-x-6 w-full mt-5 mb-5">
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalOrders}
            title="Total Monthly Orders"
            icon={<OrderListIcon width="30" height="30" fill="#ffffff" />}
            duration="783002"
            color="#d4ff66"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
            //     <ArrowUpIcon />
            //   </span>
            // }
          />
        </div>
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalDelivered}
            title="Total Monthly Delivered Orders"
            icon={<OrderCompletedIcon width="30" height="30" fill="#ffffff" />}
            duration="120000"
            color="#66ffdb"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#D9F3EA]">
            //     <ArrowUpIcon />
            //   </span>
            // }
          />
        </div>
        <div className="flex-1">
          <HeaderBox
            amount={dashboardValues?.totalCanceled}
            title="Total Monthly Canceled Orders"
            icon={<OrderCancelIcon width="30" height="30" fill="#ffffff" />}
            duration="40000"
            color="#ff6674"
            // arrowIcon={
            //   <span className="p-1 rounded-full me-1 flex items-center justify-center w-[16px] h-[16px] bg-[#ff5b5b1a]">
            //     <ArrowDownIcon />
            //   </span>
            // }
          />
        </div>
      </div>

      {/* third dashboard row */}
      <div className="flex gap-10 w-full mb-7">
        <div className=" bg-white w-1/2 rounded-2xl shadow-sm font-barlow p-7">
          <p className="font-bold text-2xl text-[#464255] mb-7"> Analytics </p>

          <div className="flex gap-4 justify-between">
            <div className="flex flex-col font-barlow font-semibold text-center">
              <CircularProgressbar
                value={Math.round((dashboardValues?.totalDelivered/dashboardValues?.totalOrders) * 100)}
                text={`${Math.round((dashboardValues?.totalDelivered/dashboardValues?.totalOrders) * 100)}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(0, 176, 116, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(0, 176, 116, 0.1)"
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Delivered Order</p>
            </div>

            <div className="flex flex-col font-barlow font-semibold text-center mx-5">
              <CircularProgressbar
                value={Math.round((dashboardValues?.totalCanceled/dashboardValues?.totalOrders) * 100)}
                text={`${Math.round((dashboardValues?.totalCanceled/dashboardValues?.totalOrders) * 100)}%`}
                styles={buildStyles({
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  textSize: "20px",
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(255, 91, 91, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(255, 91, 91, 0.1)"
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Canceled Order </p>
            </div>

            <div className="flex flex-col font-barlow font-semibold text-center">
              <CircularProgressbar
                value={Math.round((dashboardValues?.totalCompletedSales/dashboardValues?.totalRevenue) * 100)}
                text={`${Math.round((dashboardValues?.totalCompletedSales/dashboardValues?.totalRevenue) * 100)}%`}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "20px",
                  pathTransitionDuration: 0.5,
                  pathTransition:
                    percentage === 0
                      ? "none"
                      : "stroke-dashoffset 0.5s ease 0s",
                  pathColor: `rgba(195, 45, 219, ${percentage / 100})`,
                  textColor: "#000000",
                  trailColor: "rgba(195, 45, 219, 0.1)",
                  backgroundColor: "rgba(195, 45, 219, 1)"
                })}
              />
              <p className="mt-6 text-lg font-semibold"> Sales </p>
            </div>
          </div>
        </div>

        <div className=" bg-white w-1/2 rounded-2xl shadow-sm font-barlow p-7">
          <div className="flex justify-between w-full mb-3 items-center">
            <div>
              <p className="font-bold text-2xl text-[#464255]">
                Order Analytics
              </p>
              <p className="text-base font-normal text-[#B9BBBD]">
                Summary of all order
              </p>
            </div>

            <Button
              type="submit"
              className="bg-white text-[#3BB77E] text-center text-base font-semibold hover:opacity-80 py-2 px-4 rounded-xl border border-[#3BB77E] font-barlow me-6 "
              // onClick={() => console.log("logged")}
            >
              <div className="me-2 bg-primary_500">
                <ExportIcon />
              </div>
              Save Report
            </Button>
          </div>

          <GraphBoard />
        </div>
      </div>

      {/* fourth dashboard row */}
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
        <div
          className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
        />

        <div className="ps-7 w-full">
          <p className="font-semibold text-xl text-[#111827] font-inter ">
            Order history
          </p>
          <p className="font-normal text-base text-[#71717A] mb-7 font-inter">
            List of orders by customers
          </p>

          <OrderHistoryTable />
          <div className="flex justify-end w-full items-center mt-5">
            <span>
              <DoubledChevronDown />
            </span>
            <button
              type="submit"
              style={{ padding: 4 }}
              className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow ms-5 w-28 p-1 rounded-md"
              // onClick={() => console.log("logged")}
            >
              Download
            </button>
          </div>
        </div>
      </div>

      {/* last dashboard row */}
      <div className="flex gap-10 w-full mb-7">
        <div className=" flex items-center bg-white w-3/5 rounded-2xl shadow-sm font-barlow py-7 pe-7">
          <div
            className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
          />
          <div className=" bg-white font-barlow ps-4">
            <p className="font-bold text-2xl text-[#464255]"> Total Revenue</p>
            <TotalRevenueGraph />
          </div>
        </div>

        <div className=" bg-white w-2/5 rounded-2xl shadow-sm font-barlow p-7">
          <div className="flex justify-between mb-3">
            <p className="font-bold text-2xl text-[#464255]"> Customer Map </p>
            <span>
              <VertIcon />
            </span>
          </div>
          <CustomerMapGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
