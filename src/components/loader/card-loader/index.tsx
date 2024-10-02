import React from 'react';

const CardLoader = ({ count }: { count: number }) => (
    Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-[15px] xl:gap-[17px] gap-2 xl:px-3 lg:px-[10px] px-1 xl:pt-7 lg:pt-4 pt-2 xl:pb-[19px] lg:pb-4 pb-2 lg:min-w-[153px] md:min-w-[125px] min-w-[100px] shadow-category"
        >
          <div className="flex flex-col gap-1 justify-center items-center font-quickSand whitespace-nowrap w-full">
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse" />
            <div className="h-3 w-16 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
    ))
);

export default CardLoader;