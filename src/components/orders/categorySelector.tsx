"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

const category = [
  {
    id: 1,
    name: "Order List",
    routerSrc: "/orders",
  },
  {
    id: 2,
    name: "Order Summary",
    routerSrc: "/orders/order-summary",
  },
  {
    id: 3,
    name: "Delivered",
    routerSrc: "/orders/delivered",
  },
  {
    id: 4,
    name: "Canceled",
    routerSrc: "/orders/canceled",
  },
];

function CategorySelector({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex bg-[#F8F9FA] rounded-lg p-1">
      {category.map((data) => (
        <>
          <div
            key={data.id}
            className="text-[#344767] font-normal font-roboto flex items-center justify-center p-2 rounded-md mx-1 w-[131px] cursor-pointer"
            style={
              pathname === data.routerSrc
                ? {
                    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
                    color: "#3BB77E",
                    borderRadius: "0.375rem",
                  }
                : {}
            }
            onClick={(e) => {
              e.preventDefault();
              router.push(data.routerSrc);
            }}
          >
            {data.name}
          </div>
        </>
      ))}
    </div>
  );
}

export default CategorySelector;
