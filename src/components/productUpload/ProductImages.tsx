import React from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";
import ImageFetcher from "../imageFetcher";
import { FileUpload } from "./index";

const ProductImages = ({ images, disabled = false, productName }: { images: Array<string>, disabled: boolean, productName: string }) => {
  console.log("product images are ", images);
  return (
    <ProductUploadWrapper title="Product images">
      <div className={`grid ${images?.length ? "grid-cols-3 gap-1" : ""} items-stretch`}>
        {images?.length ? images.map((image: string, index: number) => (
          <div
            className="rounded-[7px] w-full xl:h-[180px] lg:h-[130px] md:h-[180px] h-[110px] max-w-full border border-black border-opacity-60"
            key={index}
          >
            <ImageFetcher name={`product/${image}`} altName={productName} />
          </div>
        )): <div className="">No uploaded product image(s) found.</div>}
      </div>
      {!disabled && <FileUpload />}
    </ProductUploadWrapper>
  );
};

export default ProductImages;
