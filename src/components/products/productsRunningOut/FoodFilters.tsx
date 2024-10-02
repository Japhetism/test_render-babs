import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Product, SelectedFilters } from "@/types/products";
import { Select } from "@/components";

interface Props {
  showVendorFilter: boolean;
  data: any[];
  activeCategory: string;
  defaultStatus: string;
  onFilterChange: (
    selectedFilters: {
      status: string;
      vendor: string;
      filteredData: Product[];
    }
  ) => void;
}

const productStatuses = ["Pending", "Approved", "Stock Level"];

const FoodFilters: React.FC<Props> = ({
  data,
  onFilterChange,
  showVendorFilter = true,
  activeCategory,
  defaultStatus,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    status: defaultStatus,
    vendor: "All",
  });

  // Memoize the filtering function
  const filterData = useMemo(() => {
    return data.filter(product => {
      const vendorMatch =
        selectedFilters.vendor === "All" ||
        selectedFilters.vendor === "" ||
        [product.vendor, product.vendor._id].includes(selectedFilters.vendor);
      const categoryMatch =
        activeCategory === "" ||
        [product.category, product.category._id].includes(activeCategory);
      const statusMatch =
      selectedFilters.status === "All" ||
        selectedFilters.status === "" ||
        product.status.toLowerCase() === selectedFilters.status.toLowerCase();
      return categoryMatch && statusMatch && vendorMatch;
    });
  }, [data, selectedFilters, activeCategory]);

  useEffect(() => {
    onFilterChange({ ...selectedFilters, filteredData: filterData });
  }, [selectedFilters, filterData, onFilterChange]);

  const vendors = useMemo(
    () =>
      [...new Map(data.filter(product => product.vendor).map(product => [product.vendor!._id, product.vendor])).values()],
    [data]
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedFilters(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex md:flex-nowrap flex-wrap items-center md:justify-center justify-start xl:gap-10 gap-3">
      <Select
        name="status"
        value={selectedFilters.status}
        onChange={handleFilterChange}
        bodyClassName="inline-block md:basis-full basis-1/3"
        selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs ${selectedFilters.status &&
          "text-primary_100"}`}
        iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
      >
        <option value="All">All Statuses</option>
        {productStatuses.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
      {showVendorFilter && (
        <Select
          name="vendor"
          value={selectedFilters.vendor}
          onChange={handleFilterChange}
          bodyClassName="inline-block md:basis-full basis-1/3"
          selectClassName={`shadow-select block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-base md:text-sm text-xs md:placeholder:text-base md:placeholder:text-sm placeholder:text-xs ${selectedFilters.vendor &&
            "text-primary_100"}`}
          iconClassName="xl:w-5 xl:h-3 md:w-4 md:h-2 w-2 h-1 xl:right-5 lg:right-3 right-2 xl:top-5 top-4"
        >
          <option value="">All Vendors</option>
          {vendors.map(vendor => (
            <option key={vendor._id} value={vendor._id}>
              {vendor.name}
            </option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default React.memo(FoodFilters);
