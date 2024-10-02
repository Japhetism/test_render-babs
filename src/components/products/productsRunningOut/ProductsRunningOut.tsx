"use client";

import React, { useState } from "react";
import FoodTable from "./FoodTable";
import FoodFilters from "./FoodFilters";
import { Product } from "@/types/products";
// import vendor from "@/redux/vendor";
// import { foodProducts } from "@/utils/foodProducts";

const ProductsRunningOut = (props: {
  title: string;
  showVendorFilter: boolean;
  isLoading: boolean;
  data: Product[];
  allPages: number;
  currentPage: number;
  activeCategory: string;
  defaultStatus: string;
  // vendors: [];
  navigateToProductDetails: (productId: string) => void;
}) => {
  const [filteredData, setFilteredData] = useState<Product[]>(props.data);

  //console.log(filteredData)
  const handleFilterChange = (selectedFilters: {
    status: string;
    vendor: string;
    // day: number;
    // month: string;
    // year: number;
    filteredData: Product[];
  }) => {
    // Update the state with the filteredData
    // setFilteredData(selectedFilters.filteredData);
    console.log("filter props ", selectedFilters.filteredData);
    setFilteredData(Array.isArray(selectedFilters.filteredData) ? selectedFilters.filteredData : []);
  };

  console.log("did update ", filteredData)

  return (
    <FoodTable
      borderColor="#3BB77E"
      description="All vendor product"
      title={props.title}
      isLoading={props.isLoading}
      data={filteredData}
      allPages={props.allPages}
      currentPage={props.currentPage}
      navigateToProductDetails={props.navigateToProductDetails}
    >
      <>
        <FoodFilters
          showVendorFilter={props.showVendorFilter} 
          data={props.data} 
          // vendors={props.vendors}
          activeCategory={props.activeCategory}
          onFilterChange={handleFilterChange}
          defaultStatus={props.defaultStatus}
        />
      </>
    </FoodTable>
  );
};

export default ProductsRunningOut;
