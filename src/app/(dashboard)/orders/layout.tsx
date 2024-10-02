"use client";

import CategorySelector from "@/components/orders/categorySelector";
import React from "react";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex flex-col items-start justify-start w-full font-barlow relative">
        <div className="flex w-full justify-end me-5 absolute top-0 ">
          <CategorySelector />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default OrderLayout;
