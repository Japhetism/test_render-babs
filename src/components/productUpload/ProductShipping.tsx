import React from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";

const ProductShipping = ({ length, breadth, width, disabled = false }: { length: number, breadth: number, width: number, disabled: boolean }) => {
  return (
    <ProductUploadWrapper title="Product shipping and delivery">
      <div className="flex items-center justify-center xl:gap-9 lg:gap-7 md:gap-5 gap-3">
        <div className="w-full relative flex flex-col items-center justify-center xl:gap-4 lg:gap-3 gap-2">
          <h2 className="font-inter xl:text-lg lg:text-base text-sm text-dark_500">
            Length
          </h2>
          <input
            disabled={disabled}
            name="length"
            className="flex items-center justify-between w-full xl:py-5 lg:py-4 py-3 xl:px-8 lg:px-6 md:px-4 px-2 placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
            defaultValue={length}
          />
          <span className="absolute xl:top-16 lg:top-[60px] top-12 right-2 text-primary_100 font-inter xl:text-base lg:text-sm md:text-xs text-[10px] font-normal">
            in
          </span>
        </div>
        <div className="w-full relative flex flex-col items-center justify-center xl:gap-4 lg:gap-3 gap-2">
          <h2 className="font-inter xl:text-lg lg:text-base text-sm text-dark_500">
            Breadth
          </h2>
          <input
            disabled={disabled}
            name="breadth"
            className="flex items-center justify-between w-full xl:py-5 lg:py-4 py-3 xl:px-8 lg:px-6 md:px-4 px-2 placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
            defaultValue={breadth}
          />
          <span className="absolute xl:top-16 lg:top-[60px] top-12 right-2 text-primary_100 font-inter xl:text-base lg:text-sm md:text-xs text-[10px] font-normal">
            in
          </span>
        </div>
        <div className="w-full relative flex flex-col items-center justify-center xl:gap-4 lg:gap-3 gap-2">
          <h2 className="font-inter xl:text-lg lg:text-base text-sm text-dark_500">
            Width
          </h2>
          <input
            disabled={disabled}
            name="width"
            className="flex items-center justify-between w-full xl:py-5 lg:py-4 py-3 xl:px-8 lg:px-6 md:px-4 px-2 placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
            defaultValue={width}
          />
          <span className="absolute xl:top-16 lg:top-[60px] top-12 right-2 text-primary_100 font-inter xl:text-base lg:text-sm md:text-xs text-[10px] font-normal">
            in
          </span>
        </div>
      </div>
    </ProductUploadWrapper>
  );
};

export default ProductShipping;
