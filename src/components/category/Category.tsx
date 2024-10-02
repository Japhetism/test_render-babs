'use client'

import React, { useState } from 'react';
import CategoryTable from './CategoryTable';
import CategoryFilters from './CategoryFilters';
import { FoodProduct } from '@/types/products';


const Category = ({categoryProducts}: {categoryProducts: FoodProduct[]}) => {
  const [filteredData, setFilteredData] = useState<FoodProduct[]>(categoryProducts);
  const categoryName = new Set(filteredData.map(category => category.category));

  console.log(categoryName)

  const handleFilterChange = (selectedFilters: {
    location: string;
    day: number;
    month: string;
    year: number;
    filteredData: FoodProduct[];
  }) => {
    // Update the state with the filteredData
    setFilteredData(selectedFilters.filteredData);
  };


  return (
    <div className='w-full flex flex-col justify-start items-start xl:gap-14 lg:gap-7 gap-4'>
       <div className='flex md:flex-row flex-col md:items-center md:justify-between items-start justify-start w-full md:gap-0 gap-4'>
          <h2 className='xl:text-2xl lg:text-xl text-lg font-semibold text-[#464255] capitalize'>{categoryName}</h2>
          <CategoryFilters data={categoryProducts} onFilterChange={handleFilterChange} />
       </div>
      <CategoryTable data={filteredData} />
    </div>
  );
};

export default Category;
