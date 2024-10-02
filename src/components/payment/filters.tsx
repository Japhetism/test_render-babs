import React from "react";

type Props = {
  selector: any;
};

function PaymentFilters({ selector }: Props) {
  return (
    <>
      <div className="flex bg-[#F8F9FA] rounded-lg">
        <div
          className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-base rounded-md mx-1 cursor-pointer shadow-sm shadow-black/20"
          style={{
            color: "#3BB77E",
            borderRadius: "0.375rem",
          }}
        >
          All
        </div>

        {selector.map((data: any) => (
          <div
            key={data.id}
            className="text-[#344767] font-normal font-roboto flex items-center justify-center py-1 px-4 text-base rounded-md mx-1 cursor-pointer"
          >
            {data.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default PaymentFilters;
