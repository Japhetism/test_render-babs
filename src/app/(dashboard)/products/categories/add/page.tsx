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
    setErrorMessage,
    setSuccessMessage,
    handleCreateProductCategory
  } = useViewModel()

  return <CategoryForm 
    btnText="Add Category"
    formDescription="Create a new product category"
    isLoading={isLoading}
    errorMessage={errorMessage}
    successMessage={successMessage}
    formData={formData}
    formDataError={formDataError}
    setFormData={setFormData}
    setSuccessMessage={setSuccessMessage}
    setErrorMessage={setErrorMessage}
    onFormSubmit={handleCreateProductCategory}
  />
}

export default ProductUpload;
