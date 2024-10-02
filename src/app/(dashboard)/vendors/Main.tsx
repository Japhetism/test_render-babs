"use client";

import React, { memo, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components";
import { Vendor } from "@/types/vendors";
import VendorsTable from "@/components/vendors/VendorsTable";
import Notification from "@/components/notification";

const VendorsPage = ({
  vendors,
  isLoading,
  errorMessage,
  setErrorMessage,
  navigateToVendorDetails
}: {
  vendors: Vendor[],
  isLoading: boolean,
  errorMessage: string,
  setErrorMessage: (message: string) => void;
  navigateToVendorDetails: (id: string) => void
}) => {
  
  const [keyword, setKeyword] = useState("");

  const filteredVendors = useMemo(
    () => {
      if (keyword.trim() === "") {
        return vendors;
      }
      return vendors.filter(vendor => 
        vendor.name.toLowerCase().includes(keyword.toLowerCase())
      );
    },
    [keyword, vendors] 
  );

  return (
    <div className="flex flex-col items-start justify-start xl:gap-[75px] lg:gap-16 gap-8 w-full h-full font-barlow">
      <div className="flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-0 gap-5 w-full">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            Vendors
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            All vendors
          </p>
        </div>

        <div className="relative w-[400px] me-2">
          <Button
            type="button"
            className="w-full bg-primary_100 hover:bg-opacity-80 xl:py-5 py-3 me-3"
          >
            <Link
              href="/vendors/new"
              className="flex items-center justify-center xl:gap-9 lg:gap-5 md:gap-4 gap-3 w-full"
            >
              <span className="text-white font-barlow xl:text-lg lg:text-base text-sm font-normal">
                Add Vendor
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
            placeholder="Search vendors..."
          />
        </div>
        <VendorsTable data={filteredVendors} isLoading={isLoading} navigateToVendorDetails={(id: string) => navigateToVendorDetails(id)} />
      </div>
      {errorMessage  && (
        <Notification
          isError={Boolean(errorMessage)}
          message={errorMessage}
          onClose={(message: string) => setErrorMessage(message)}
        />
      )}
    </div>
  );
};

export default memo(VendorsPage);
