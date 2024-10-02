import React from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";
import VendorPicker from "../vendors/VendorPicker";

const ProductVendor = () => {
  return (
    <ProductUploadWrapper title="Product Vendor">
      <VendorPicker />
    </ProductUploadWrapper>
  );
};

export default ProductVendor;
