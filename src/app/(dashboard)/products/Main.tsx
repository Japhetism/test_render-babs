"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, CategoryList, ProductsRunningOut } from "@/components";
import { ApiProductResponse, CategoryDataTypes } from "@/types/products";
import Notification from "@/components/notification";

const Product = ({
  activeCategory,
  isLoading,
  categories,
  productsData,
  errorMessage,
  setActiveCategory,
  navigateToProductDetails,
  navigateToProductCategories,
  setErrorMessage,
}: {
  activeCategory: string;
  isLoading: boolean;
  categories: any;
  productsData: any;
  errorMessage: string | null,
  setActiveCategory: (id: string) => void;
  navigateToProductDetails: (productId: string) => void;
  navigateToProductCategories: () => void;
  setErrorMessage: (message: string) => void;
}) => {
  // console.log("vendors from main ", vendors);
  const [isOpen, setIsOpen] = useState(false);
  const { products, totalProductCount, page, perPage } = productsData;

  // console.log({ products });

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-start justify-start xl:gap-[75px] lg:gap-16 gap-8 w-full h-full font-barlow">
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-5 w-full">
        <div className="flex flex-col items-start justify-normal w-full">
          {totalProductCount && (
            <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
              Products ({totalProductCount})
            </h2>
          )}
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            All Products
          </p>
        </div>

        <div className="relative w-[450px] grid grid-cols-2 gap-2 me-2">
          <Button
            type="button"
            className="w-full bg-primary_100 hover:bg-opacity-80 xl:py-5 py-3 me-3"
          >
            <Link
              href="/products/categories/add"
              className="flex items-center justify-center xl:gap-9 lg:gap-5 md:gap-4 gap-3 w-full"
            >
              <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
                + Category
              </span>
            </Link>
          </Button>
          <Button
            type="button"
            className="w-full bg-primary_100 hover:bg-opacity-80 xl:py-5 py-3 me-3"
          >
            <Link
              href="/products/product-brand"
              className="flex items-center justify-center xl:gap-9 lg:gap-5 md:gap-4 gap-3 w-full"
            >
              <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
                + Brand
              </span>
            </Link>
          </Button>
          {isOpen &&
            <div className="absolute shadow-md p-3 rounded">
              <p>Add Product category</p>
              <p>Update Product category</p>
            </div>}
        </div>

        <Button
          type="button"
          className="w-full xl:max-w-[210px] lg:max-w-[210px] md:max-w-[180px] bg-primary_100 hover:bg-opacity-80 xl:py-5 py-3"
        >
          <Link
            href="/products/product-upload"
            className="flex items-center justify-center xl:gap-9 lg:gap-5 md:gap-4 gap-3 w-full"
          >
            <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
              Upload Product
            </span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-start justify-start xl:gap-[30px] lg:gap-6 gap-5 w-full">
        <div className="flex flex-row justify-between xl:gap-[30px] lg:gap-6 gap-5 w-full">
          <h2 className="xl:text-2xl lg:text-xl text-lg font-semibold text-[#464255]">
            Product Category
          </h2>
          <h2 className="text-primary_100 cursor-pointer" onClick={() => navigateToProductCategories()} >
            View All Categories
          </h2>
        </div>
        <CategoryList setActiveCategory={setActiveCategory} activeCategory={activeCategory} isLoading={isLoading} categoriesData={categories} />
      </div>
      {categories.length > 0 && (
        <ProductsRunningOut
          title="Vendor Products"
          isLoading={isLoading}
          data={products}
          allPages={Math.ceil(totalProductCount / perPage)}
          currentPage={page}
          // vendors={vendors}
          activeCategory={activeCategory}
          navigateToProductDetails={navigateToProductDetails}
          defaultStatus="Pending"
        />
      )}
      {errorMessage && <Notification
        isError={Boolean(errorMessage)}
        message={errorMessage}
        onClose={(message: string) => {
          setErrorMessage(message)  
        }}
      />}
    </div>
  );
};

export default Product;
