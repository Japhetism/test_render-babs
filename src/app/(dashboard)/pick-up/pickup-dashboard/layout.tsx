"use client";

import CategorySelector from "@/components/pickup/CategorySelector";
import React from "react";

const PickUpDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex justify-between w-full mb-5">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Categories
          </h2>
        </div>
      </div>
      <CategorySelector />
      <div className="w-full">{children}</div>
    </main>
  );
};

export default PickUpDashboardLayout;
