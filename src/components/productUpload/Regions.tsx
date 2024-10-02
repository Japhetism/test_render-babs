"use client";

import React, { useEffect, useState } from "react";
import ProductUploadWrapper from "./ProductUploadWrapper";
import { states } from "@/fixtures/states";

import { Select } from "@/components";

const Regions = ({ disabled = false, region }: { disabled: boolean, region: string }) => {
  const [isGeneral, setIsGeneral] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (region) setSelected(`${region?.charAt(0)?.toUpperCase()}${region?.slice(1)}`);
  }, [region]);

  return (
    <ProductUploadWrapper title="Regions">
      <div className="flex items-center justify-between">
        <label className="flex items-center xl:space-x-[26px] lg:space-x-5 space-x-3">
          <input
            disabled={disabled}
            name="region-radio"
            type="radio"
            value="general"
            checked={isGeneral}
            onChange={() => setIsGeneral(!isGeneral)}
            className="xl:w-9 xl:h-8 lg:w-7 lg:h-6 w-4 h-4 rounded-[9px] border-[#cec1c1] border-opacity-40 focus:outline-none transition duration-300 focus:border-primary_100 accent-primary_100 outline-none"
          />
          <span className="font-inter xl:text-lg lg:text-base text-sm text-dark_500">
            General Market
          </span>
        </label>

        <input
          disabled={disabled}
          type="hidden"
          value="general"
          name={isGeneral ? "region" : ""}
          hidden
        />

        <div className="flex items-center xl:space-x-[26px] lg:space-x-5 space-x-3">
          <input
            disabled={disabled}
            onChange={() => setIsGeneral(!isGeneral)}
            name="region-radio"
            type="radio"
            checked={!isGeneral}
            className="xl:w-9 xl:h-8 lg:w-7 lg:h-6 w-5 h-5 rounded-[9px] border-[#cec1c1] border-opacity-40  focus:outline-none transition duration-300 focus:border-primary_100 accent-primary_100 outline-none"
          />
          <Select
            disabled={disabled}
            onChange={e => setSelected(e.target.value)}
            name={!isGeneral ? "region" : ""}
            selectClassName="block xl:py-3 py-2 xl:pl-7 lg:pl-[15px] pl-3 xl:pr-11 lg:pr-9 pr-7 xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm"
            iconClassName="xl:w-6 xl:h-4 md:w-4 md:h-3 w-3 h-2 xl:right-5 lg:right-3 right-2 top-4"
            value={selected}
          >
            {states.map((state: string, index: number)  => (
              <option
                key={index}
                className="font-inter xl:text-lg lg:text-base text-sm text-dark_500"
                value={state}
              >
                {state}
              </option> 
            ))}
          </Select>
        </div>
      </div>
    </ProductUploadWrapper>
  );
};

export default Regions;
