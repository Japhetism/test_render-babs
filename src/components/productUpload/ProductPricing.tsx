import React from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";

const ProductPricing = ({ price, disabled = false }: { price: number, disabled: boolean }) => {
  return (
    <ProductUploadWrapper title="Product pricing">
      <div className="w-full relative">
        <input
          disabled={disabled}
          type="number"
          name="price"
          className="flex items-center justify-between w-full xl:py-4 py-3 xl:pl-36 lg:pl-28 md:pl-24 pl-20 placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg md:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
          defaultValue={price}
        />
        <span className="text-[#344767] text-center font-roboto xl:text-[28px] lg:text-xl md:text-lg text-base font-normal rounded-[14px] shadow-lg xl:px-9 xl:py-[10px] md:px-7 py-[6px] px-5 border border-[#cec1c1] border-opacity-30 line-through absolute top-1 left-1">
          N
        </span>
      </div>
    </ProductUploadWrapper>
  );
};

export default ProductPricing;
