"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryDataTypes } from "@/types/products";
import CardLoader from "../loader/card-loader";


const CategoryList = ({
  categoriesData,
  isLoading,
  activeCategory,
  setActiveCategory
}:{
  categoriesData: CategoryDataTypes[],
  isLoading: boolean,
  activeCategory: string,
  setActiveCategory: (id: string) => void 
}) => {
  console.log("categories data ", categoriesData);
  console.log("active product category ", activeCategory);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
        {isLoading && <CardLoader count={5} />}
        {!isLoading && categoriesData.map(({ _id: id, name, img, total, bgColor, description }) => (
          <div
            key={id}
            className={`${activeCategory === id ? "bg-primary_100" : ""} flex flex-col items-center rounded-[15px] xl:gap-[17px] gap-2 xl:px-3 lg:px-[10px] px-1 xl:pt-7 lg:pt-4 pt-2 xl:pb-[19px] lg:pb-4 pb-2 lg:min-w-[153px] md:min-w-[125px] min-w-[100px] shadow-category cursor-pointer`}
            style={{ background: `${bgColor}` }}
            // onClick={() => router.push(`/products/${name.toLowerCase()}`)}
            onClick={() => setActiveCategory(id)}
          >
            <div className="flex flex-col gap-1 justify-center items-center font-quickSand whitespace-nowrap w-full">
              <h3 className={`${activeCategory === id ? "text-white" : "text-dark_600"} xl:text-lg md:text-sm text-xs font-semibold text-center`}>
                {name}
              </h3>
              <span className={`${activeCategory === id ? "text-white" : "text-[#adadad]"} xl:text-sm lg:text-xs text-[10px] text-center leading-4 font-medium truncate w-20`}>
                {description}
              </span>
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
};

export default CategoryList;
