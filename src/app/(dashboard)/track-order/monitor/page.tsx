"use client";

import React, { useEffect, useState } from "react";
import Table from "@/components/table";
import { mockOrders } from "@/mockresponses/trackOrders";
import { Stepper } from "@/components/stepper";
import { Select } from "@/components";
import { generateStages } from "@/utils/helper";

type Props = {};

interface ITab {
  name: string
  description: string
  content: JSX.Element
}

const orderTableHeader = ["name", "date", "location", "vendor", "amount"];

const tabs: ITab[] = [
  {
    name: "Vendors",
    description: "List of orders with vendor",
    content: <Table header={orderTableHeader} data={mockOrders} />
  },
  {
    name: "Drivers",
    description: "List of orders with drivers",
    content: <Table header={orderTableHeader} data={mockOrders} />
  },
  {
    name: "Pickup Stations",
    description: "List of orders in Pickup Stations",
    content: <Table header={orderTableHeader} data={mockOrders} />
  },
  {
    name: "Completed",
    description: "List of Completed Orders",
    content: <Table header={orderTableHeader} data={mockOrders} />
  }
]

function Monitor({}: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [deliveryType, setDeliveryType] = useState<string>("pickup");
  const [pipeline, setPipeline] = useState<ITab[]>(tabs);
  
  const getDeliveryTypeTab = (): void => {
    if (deliveryType === "home") {
      const homeTab: ITab[] = tabs.filter((tab: ITab) => tab.name.toLowerCase() !== "pickup stations");
      setPipeline(homeTab)
    } else {
      setPipeline(tabs);
    }
  };

  useEffect(() => {
    getDeliveryTypeTab();
  }, [deliveryType]);

  return (
    <div className="w-full">
      <div className="flex justify-between border-b">
        <div className="flex space-x-4">
          {pipeline.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 focus:outline-none ${
                activeTab === index ? 'border-b-2 border-green-500 font-semibold' : 'text-gray-500'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
  
        <div className="flex self-start w-1/4 justify-end">
          <Select
            bodyClassName="flex me-2"
            selectClassName="p-2 flex pe-7 shadow-md"
            iconClassName="w-4 top-[16px] right-[10px]"
            value={deliveryType}
            onChange={(e) => {
              setActiveTab(0)
              setDeliveryType(e.target.value)
            }}
          >
            <option
              className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
              value="home"
            >
              Home Delivery
            </option>
            <option
              className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
              value="pickup"
            >
              Pickup
            </option>
            
          </Select>
        </div>
      </div>

      <div className="mt-10">
        <Stepper steps={generateStages(pipeline.length, activeTab)} />
      </div>
      <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7 mt-10">
        <div className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`} />
         <div className="ps-3 w-full">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="font-semibold text-xl text-[#111827] font-inter ">
                {pipeline[activeTab].name}
              </p>
              <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                {pipeline[activeTab].description}
              </p>
            </div>
          </div>
          <div className="mt-4 w-full">
            {pipeline[activeTab].content}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Monitor;
