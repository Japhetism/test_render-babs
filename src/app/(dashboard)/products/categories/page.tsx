"use client";

import React, { memo, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components";
import CategoryTable from "@/components/category/CategoryTable";
import Modal from "@/components/Modal";
import Notification from "@/components/notification";
import { useViewModel } from "./useViewmodel";

const CategoriesPage = () => {  
  
  const {
    isLoading,
    errorMessage,
    successMessage,
    isDeleteLoading,
    categories,
    showModal,
    categoryToDelete,
    setSuccessMessage,
    setErrorMessage,
    handleHideDeleteModal,
    handleShowDeleteModal,
    handleDeleteProductCategory,
    navigateToCategoriesDetails,
  } = useViewModel();

  const [keyword, setKeyword] = useState("");

  const filteredCategories = useMemo(
    () => {
      if (keyword.trim() === "") {
        return categories;
      }
      return categories.filter((category: { name: string; }) => 
        category.name.toLowerCase().includes(keyword.toLowerCase())
      );
    },
    [keyword, categories] 
  );

  return (
    <div className="flex flex-col items-start justify-start xl:gap-[75px] lg:gap-16 gap-8 w-full h-full font-barlow">
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-5 w-full">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Categories
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            All categories
          </p>
        </div>

        <div className="relative w-[400px] me-2">
          <Button
            type="button"
            className="w-full bg-primary_100 hover:bg-opacity-80 xl:py-5 py-3 me-3"
          >
            <Link
              href="/products/categories/add"
              className="flex items-center justify-center xl:gap-9 lg:gap-5 md:gap-4 gap-3 w-full"
            >
              <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
                Add Category
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <div className="flex w-full pb-3">
          <input
            onChange={e => setKeyword(e.target.value)}
            type="text"
            className="rounded-md border outline-primary_100 focus:border-primary_100 px-4 py-2 w-full max-w-[600px]"
            placeholder="Search categories..."
          />
        </div>
          <CategoryTable isLoading={isLoading} data={filteredCategories} navigateToCategoriesDetails={navigateToCategoriesDetails} onDelete={handleShowDeleteModal} />
          {showModal && (
            <Modal height="max-content">
              <div className="h-full w-full p-5">
                <h2 className="text-lg font-semibold">{`Are you sure you want to delete ${categoryToDelete.name} from the category list?`}</h2>
                <p className="text-gray-600">This action cannot be undone.</p>
                <div className="mt-4 flex justify-end">
                  <Button
                    type="button"
                    className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                    loading={isDeleteLoading}
                    onClick={() => handleDeleteProductCategory()}
                  >
                    <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
                      Yes, delete
                    </span>
                  </Button>
                  <Button
                    type="button"
                    className="ml-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                    loading={isDeleteLoading}
                    onClick={() => handleHideDeleteModal()}
                  >
                    <span className="text-gray-700 font-barlow xl:text-lg lg:text-base text-sm font-normal">
                      Cancel
                    </span>
                  </Button>
                </div>
              </div>
            </Modal>
          )}
          {(successMessage || errorMessage) && (
            <Notification
              isError={Boolean(errorMessage)}
              message={successMessage || errorMessage}
              onClose={(message: string) => {
                  setSuccessMessage(message)
                  setErrorMessage(message)  
              }}
            />
          )}
      </div>
    </div>
  );
};

export default memo(CategoriesPage);
