import React, { useState, useRef } from "react";
import {
  FullfillmentCenter,
  AssignedOrder,
  DeliveryDriver,
  FullfilledOrder,
  NegativeRatings,
  PositiveRatings,
  UnFullfilledOrder,
  UnassignedOrder,
} from "../../../public/assets/icons/pick-up";
import { useRouter, usePathname } from "next/navigation";
type Props = {};
const category = [
  {
    firstName: "Fulfillment",
    lastName: "Centers",
    icon: <FullfillmentCenter />,
    src: "/pick-up/pickup-dashboard",
  },
  {
    firstName: "Delivery",
    lastName: "Drivers",
    icon: <DeliveryDriver />,
    src: "/pick-up/pickup-dashboard/delivery-drivers",
  },
  {
    firstName: "Assigned",
    lastName: "Orders",
    icon: <AssignedOrder />,
    src: "/pick-up/pickup-dashboard/assigned-orders",
  },
  {
    firstName: "Unassigned",
    lastName: "Orders",
    icon: <UnassignedOrder />,
    src: "/pick-up/pickup-dashboard/unassigned-orders",
  },
  {
    firstName: "Fulfilled",
    lastName: "Orders",
    icon: <FullfilledOrder />,
    src: "/pick-up/pickup-dashboard/fulfilled-orders",
  },
  {
    firstName: "Unfulfilled",
    lastName: "Order",
    icon: <UnFullfilledOrder />,
    src: "/pick-up/pickup-dashboard/unfulfilled-orders",
  },
  {
    firstName: "Positive",
    lastName: "Ratings",
    icon: <PositiveRatings />,
    src: "/pick-up/pickup-dashboard/positive-ratings",
  },
  {
    firstName: "Negative",
    lastName: "Ratings",
    icon: <NegativeRatings />,
    src: "/pick-up/pickup-dashboard/negative-ratings",
  },
];

function CategorySelector({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scrolling distance as needed
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scrolling distance as needed
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      <button
        onClick={handlePrevClick}
        className={`rounded-full bg-white xl:p-[10px] p-2 focus:outline-none ${
          scrollPosition === 0
            ? "pointer-events-none cursor-not-allowed"
            : "cursor-pointer pointer-events-auto"
        } rotate-180`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`xl:w-6 xl:h-6 w-4 h-4 ${
            scrollPosition === 0 ? "opacity-60 " : "opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
            fill="#253D4E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
            fill="#253D4E"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="flex items-center justify-start xl:gap-5 lg:gap-4 gap-3 overflow-x-auto scrollbar-hide xl:w-[85%] md:w-[90%] transition-all ease-in-out duration-500 pb-2"
        onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
      >
        {category.map((data, i) => (
          <div
            onClick={() => {
              router.push(data.src);
            }}
            key={i}
            className={`min-h-[165px] min-w-[125px] flex flex-col  bg-white shadow-md items-center p-2 rounded-xl cursor-pointer group shadow-black/20 ${
              pathname === data.src ? "" : ""
            }`}
          >
            <div
              className={`h-[110px] w-[100%] flex items-center justify-center group-hover:opacity-30 transition-all ease-in duration-300 ${
                pathname === data.src ? "opacity-30" : ""
              }`}
            >
              {data.icon}
            </div>
            <div
              className={`flex-grow bg-[#00B074] w-[100%] flex flex-col items-center justify-center rounded-xl group-hover:bg-[#D9F3EA] py-2 group-hover:text-[#00B074] transition-all ease-in duration-300 ${
                pathname === data.src
                  ? "bg-[#D9F3EA] text-[#00B074]"
                  : "text-white"
              }`}
            >
              <p className="font-barlow text-sm font-medium leading-3">
                {data.firstName}
              </p>
              <p className="font-barlow text-sm font-medium">{data.lastName}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleNextClick}
        className={`rounded-full bg-white xl:p-[10px] p-2 focus:outline-none ${
          scrollPosition >=
          containerRef.current?.scrollWidth! -
            containerRef.current?.clientWidth!
            ? "pointer-events-none cursor-not-allowed"
            : "cursor-pointer pointer-events-auto"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`xl:w-6 xl:h-6 w-4 h-4 ${
            scrollPosition >=
            containerRef.current?.scrollWidth! -
              containerRef.current?.clientWidth!
              ? "opacity-60 "
              : "opacity-100"
          }`}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
            fill="#253D4E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
            fill="#253D4E"
          />
        </svg>
      </button>
    </div>
  );
}

export default CategorySelector;
