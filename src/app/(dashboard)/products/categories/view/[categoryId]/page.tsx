"use client";

import React from "react";
import { useViewModel } from "./useViewmodel";
import CategoryForm from "@/components/category/CategoryForm";

const ProductUpload = () => {
  const {
    isLoading,
    errorMessage,
    formData,
    formDataError,
    successMessage,
    setFormData,
    setSuccessMessage,
    setErrorMessage,
    handleUpdateProductCategory,
  } = useViewModel()

  return <CategoryForm
    btnText="Update Category"
    formDescription="Update existing product category"
    isLoading={isLoading}
    errorMessage={errorMessage}
    successMessage={successMessage}
    formData={formData}
    formDataError={formDataError}
    setFormData={setFormData}
    setSuccessMessage={setSuccessMessage}
    setErrorMessage={setErrorMessage}
    onFormSubmit={handleUpdateProductCategory}
  />
};

export default ProductUpload;
