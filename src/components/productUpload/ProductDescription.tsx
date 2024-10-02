import React from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";

const ProductDescription = ({ name, description, disabled = false }: { name: string, description: string, disabled: boolean }) => {
  return (
    <ProductUploadWrapper title="Product description">
      <input
        disabled={disabled}
        name="name"
        type="text"
        className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
        placeholder="Product name"
        defaultValue={name}
      />
      <textarea
        disabled={disabled}
        name="description"
        rows={7}
        placeholder="About product"
        className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
        defaultValue={description}
      />
    </ProductUploadWrapper>
  );
};

export default ProductDescription;
