"use client";

import React from "react";
import { Button, ProductUploadWrapper } from "@/components";
import {
  ProductCategory,
  ProductDescription,
  ProductImages,
  ProductPricing,
  ProductInventory,
  ProductShipping,
  Regions,
  FileUpload
} from "@/components/productUpload";
import FormMessage from "@/components/auth/FormMessage";
import { useFormSubmit } from "@/hooks";
import { ApiFormResponse } from "@/types/auth";
import { API } from "@/utils/constants";
import { z } from "zod";
import { useCookies } from "next-client-cookies";

const brandSchema = z.object({
  name: z.string().min(2, "name must be at least 2 characters long"),
  description: z
    .string()
    .min(10, "description must be at least 10 characters long")
});

const ProductUpload = () => {
  const { get } = useCookies();
  const {
    formProps: { onSubmit, key },
    formState,
    setSuccessMessage,
    setErrorMessage,
    reset
  } = useFormSubmit<ApiFormResponse>({
    url: `${API}/product/brand`,
    headers: {
      Authorization: `Bearer ${get("accessToken")}`
    },
    formatFormData(data) {
      return [data];
    },
    beforeSubmit: data => {
      try {
        brandSchema.parse(data);
        if (data.confirmPassword !== data.password) {
          setErrorMessage("Passwords do not match");
          return false;
        }
        return true;
      } catch (err) {
        if (err instanceof z.ZodError) {
          const errors = err.flatten().fieldErrors;
          const firstError = errors[Object.keys(errors)[0]];
          setErrorMessage(firstError![0]);
        }
        return false;
      }
    },
    onComplete: data => {
      if (data.hasError) {
        setErrorMessage(data.message);
      } else {
        const errors = data.data!.errorList as any[];
        const success = data.data!.successList as any[];
        if (errors.length > 0) {
          setErrorMessage(errors[0].meessage);
        } else if (success.length > 0) {
          setSuccessMessage("Brand Added successfully!");
          reset();
        }
      }
    }
  });

  return (
    <div className="flex flex-col items-start justify-start xl:gap-16 lg:gap-12 gap-8 w-full h-full font-barlow">
      <div className="flex flex-col items-start justify-normal w-full">
        <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
          Brand upload
        </h2>
        <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
          Upload product categories to the website for customers to buy
        </p>
      </div>
      <div className="flex lg:flex-row items-start justify-start lg:gap-8 md:gap-6 gap-4 flex-col xl:py-8 lg:py-6 py-4 lg:px-7 px-3  bg-white w-full rounded-2xl shadow-sm">
        {/*col 1*/}
        <form
          key={key}
          onSubmit={onSubmit}
          className="flex flex-col lg:gap-11 md:gap-8 gap-5 mxl:basis-1/2 basis-full w-full"
        >
          {/* <ProductUploadWrapper title="Category images">
            <div className="grid grid-cols-3 gap-1 items-stretch">
              <FileUpload />
              <FileUpload />
              <FileUpload />
            </div>
          </ProductUploadWrapper> */}

          <FormMessage {...formState} />
          <ProductUploadWrapper title="">
            <input
              type="text"
              name="name"
              className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
              placeholder="Brand name"
            />
            <textarea
              name="description"
              rows={7}
              placeholder="About brand / description"
              className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none"
            />
          </ProductUploadWrapper>

          <Button
            type="submit"
            loading={formState.loading}
            className="w-full bg-primary_100 hover:bg-opacity-80 xl:py-6 lg:py-4 md:py-3 py-2 xl:gap-9 lg:gap-5 md:gap-4 gap-3 mt-auto"
          >
            <svg
              className="xl:w-[72px] xl:h-[72px] lg:w-10 lg:h-9 md:w-9 md:h-8 w-6 h-6"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="82"
                height="82"
                rx="25.625"
                fill="white"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41 28C41.131 27.9999 41.2604 28.0272 41.3794 28.08C41.4984 28.1327 41.6041 28.2097 41.6893 28.3057L45.3172 32.389C45.4737 32.5654 45.5512 32.7945 45.5326 33.026C45.514 33.2575 45.4009 33.4723 45.218 33.6233C45.0352 33.7743 44.7977 33.8491 44.5578 33.8311C44.3178 33.8132 44.0951 33.704 43.9386 33.5277L41.907 31.241V44.0417C41.907 44.2737 41.8114 44.4963 41.6413 44.6604C41.4712 44.8245 41.2405 44.9167 41 44.9167C40.7595 44.9167 40.5288 44.8245 40.3587 44.6604C40.1886 44.4963 40.093 44.2737 40.093 44.0417V31.2398L38.0614 33.5277C37.9839 33.615 37.8893 33.6867 37.7831 33.7388C37.6768 33.7909 37.561 33.8223 37.4422 33.8311C37.3234 33.84 37.2039 33.8262 37.0907 33.7906C36.9774 33.7549 36.8725 33.6981 36.782 33.6233C36.6914 33.5486 36.6171 33.4573 36.5631 33.3548C36.5091 33.2523 36.4766 33.1406 36.4674 33.026C36.4582 32.9114 36.4725 32.7961 36.5094 32.6868C36.5464 32.5775 36.6053 32.4763 36.6828 32.389L40.3107 28.3057C40.3959 28.2097 40.5016 28.1327 40.6206 28.08C40.7396 28.0272 40.869 27.9999 41 28ZM34.9487 36.169C35.1892 36.1678 35.4204 36.2588 35.5914 36.422C35.7624 36.5852 35.8592 36.8073 35.8605 37.0393C35.8617 37.2714 35.7674 37.4945 35.5982 37.6594C35.4291 37.8244 35.1989 37.9178 34.9583 37.919C33.6366 37.926 32.6993 37.9587 31.9871 38.0847C31.3026 38.2072 30.9047 38.402 30.6109 38.6855C30.2759 39.0087 30.0582 39.4625 29.9385 40.3188C29.8164 41.1997 29.814 42.3675 29.814 44.0417V45.2083C29.814 46.8837 29.8164 48.0515 29.9385 48.9323C30.0582 49.7887 30.2771 50.2413 30.6109 50.5657C30.9459 50.8877 31.4151 51.0977 32.3039 51.2132C33.2157 51.3322 34.4274 51.3333 36.1628 51.3333H45.8372C47.5726 51.3333 48.7831 51.3322 49.6973 51.2132C50.5849 51.0977 51.0541 50.8877 51.3891 50.5645C51.7241 50.2413 51.9418 49.7887 52.0615 48.9323C52.1836 48.0515 52.186 46.8837 52.186 45.2083V44.0417C52.186 42.3675 52.1836 41.1997 52.0615 40.3177C51.9418 39.4625 51.7229 39.0087 51.3891 38.6855C51.094 38.402 50.6974 38.2072 50.0129 38.0847C49.3006 37.9587 48.3634 37.926 47.0417 37.919C46.9226 37.9184 46.8048 37.8951 46.695 37.8506C46.5852 37.8061 46.4855 37.7411 46.4018 37.6594C46.318 37.5777 46.2517 37.4809 46.2067 37.3745C46.1617 37.2681 46.1389 37.1542 46.1395 37.0393C46.1402 36.9244 46.1643 36.8108 46.2104 36.7048C46.2566 36.5989 46.3239 36.5028 46.4086 36.422C46.4933 36.3412 46.5936 36.2772 46.7039 36.2338C46.8142 36.1904 46.9322 36.1684 47.0513 36.169C48.3598 36.176 49.4494 36.2063 50.3407 36.3638C51.2573 36.5272 52.0373 36.8363 52.6722 37.4488C53.4002 38.15 53.7122 39.0355 53.8597 40.0855C54 41.0958 54 42.3827 54 43.9775V45.2725C54 46.8685 54 48.1542 53.8597 49.1657C53.7122 50.2157 53.4002 51.1 52.6722 51.8023C51.9442 52.5047 51.0275 52.8057 49.9392 52.948C48.8907 53.0833 47.5568 53.0833 45.9037 53.0833H36.0963C34.4432 53.0833 33.1093 53.0833 32.0608 52.948C30.9725 52.8068 30.0558 52.5047 29.3278 51.8023C28.5998 51.1 28.2878 50.2157 28.1415 49.1657C28 48.1542 28 46.8673 28 45.2725V43.9775C28 42.3827 28 41.0958 28.1415 40.0843C28.2866 39.0343 28.601 38.15 29.3278 37.4477C29.9627 36.8363 30.7427 36.526 31.6593 36.3638C32.5506 36.2063 33.6402 36.176 34.9487 36.169Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-barlow xl:text-2xl md:text-xl text-lg font-medium">
              Add Brand
            </span>
          </Button>
        </form>

        {/*col 2*/}
        <div className="flex flex-col lg:gap-11 md:gap-8 gap-5 mxl:basis-1/2 basis-full w-full h-full" />
      </div>
    </div>
  );
};

export default ProductUpload;
