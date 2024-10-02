import React, { useEffect, useState, useCallback } from "react";
import { FoodProduct, SelectedFilters } from "@/types/products";
import { Select } from "@/components";

interface Props {
  data: FoodProduct[];
  onFilterChange: (
    selectedFilters: {
      location: string;
      day: number;
      month: string;
      year: number;
      filteredData: FoodProduct[];
    }
  ) => void;
}

const CategoryFilters: React.FC<Props> = ({ data, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: "",
    region: "",
    day: 0,
    month: "",
    year: 0
  });

  // Memoize the onFilterChange function to prevent useEffect from running in infinite loop
  const memoizedOnFilterChange = useCallback(onFilterChange, []);

  // Function to filter the data based on the selected values
  const filterData = () => {
    return data.filter(product => {
      const categoryMatch =
        selectedFilters.category === "" ||
        product.category === selectedFilters.category;
      const locationMatch =
        selectedFilters.region === "" ||
        product.location === selectedFilters.region;
      const dayMatch =
        selectedFilters.day === 0 || product.date.day === selectedFilters.day;
      const monthMatch =
        selectedFilters.month === "" ||
        product.date.month === selectedFilters.month;
      const yearMatch =
        selectedFilters.year === 0 ||
        product.date.year === selectedFilters.year;

      return (
        categoryMatch && locationMatch && dayMatch && monthMatch && yearMatch
      );
    });
  };

  // Trigger the filterData function whenever selectedFilters change
  useEffect(
    () => {
      const filteredData = filterData();
      // Pass the filteredData along with the selectedFilters
      memoizedOnFilterChange({ ...selectedFilters, filteredData });
    },
    [selectedFilters, memoizedOnFilterChange]
  );

  const locations: string[] = [
    ...new Set(data.map(product => product.location))
  ];
  const days: number[] = [...new Set(data.map(product => product.date.day))];
  const months: string[] = [
    ...new Set(data.map(product => product.date.month))
  ];
  const years: number[] = [...new Set(data.map(product => product.date.year))];

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedFilters(prevState => ({
      ...prevState,
      [name]: name === "day" || name === "year" ? Number(value) : value
    }));
  };

  return (
    <div className="flex md:flex-nowrap flex-wrap items-center md:justify-center justify-start xl:gap-10 gap-3">
      <Select
        name="location"
        value={selectedFilters.region}
        onChange={handleFilterChange}
        bodyClassName="inline-block lg:max-w-full md:basis-full basis-1/3"
        selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs ${selectedFilters.region &&
          "text-primary_100"}`}
        iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
      >
        <option value="">Location</option>
        {locations.map(location =>
          <option key={location} value={location}>
            {location}
          </option>
        )}
      </Select>
      <Select
        name="day"
        value={selectedFilters.day}
        onChange={handleFilterChange}
        bodyClassName="lg:max-w-full md:max-w-[70px] max-w-[100px] md:basis-full basis-1/3"
        selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs  ${selectedFilters.day &&
          "text-primary_100"}`}
        iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
      >
        <option value="">Day</option>
        {days.map(day =>
          <option key={day} value={day}>
            {day}
          </option>
        )}
      </Select>
      <Select
        name="month"
        value={selectedFilters.month}
        onChange={handleFilterChange}
        bodyClassName="inline-block lg:max-w-full md:max-w-[90px]  md:basis-full basis-1/3"
        selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs  ${selectedFilters.month &&
          "text-primary_100"}`}
        iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
      >
        <option value="">Month</option>
        {months.map(month =>
          <option key={month} value={month}>
            {month}
          </option>
        )}
      </Select>
      <Select
        name="year"
        value={selectedFilters.year}
        onChange={handleFilterChange}
        bodyClassName="lg:max-w-full md:max-w-[80px] md:basis-full basis-1/3"
        selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs  ${selectedFilters.year &&
          "text-primary_100"}`}
        iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
      >
        <option value="">Year</option>
        {years.map(year =>
          <option key={year} value={year}>
            {year}
          </option>
        )}
      </Select>
    </div>
  );
};

export default React.memo(CategoryFilters);
