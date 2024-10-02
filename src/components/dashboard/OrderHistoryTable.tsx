import React from "react";

type TableProps = {};

const OrderHistoryTable = ({}: TableProps) => {
  const textArray: number[] = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
          <tr>
            <th className="text-start  py-4 px-1"> Name </th>
            <th className="text-start"> Phone Number </th>
            <th className="text-start"> EMAILS </th>
            <th className="text-start"> Location </th>
            <th className="text-start"> ID NUMBER </th>
            <th className="text-start"> AMOUNT </th>
            <th className="text-start"> DATE & Time</th>
            <th className="text-start"> PAYMENT </th>
          </tr>
        </thead>
        <tbody>
          {textArray.map((item, index) => (
            <tr
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#F9FAFB",
              }}
              className="p-4 font-inter text-[#111827]"
            >
              <td className="px-1 py-4 text-sm "> Tony Brigss</td>
              <td className="px-1 py-4 text-sm font-semibold"> 080000000</td>
              <td className="px-1 py-4 text-sm "> Tony Briggs@gmail.com</td>
              <td className="px-1 py-4 text-sm ">Tony Briggs@gmail.com </td>
              <td className="px-1 py-4 text-sm "> #435fre </td>
              <td className="px-1 py-4 text-sm "> N 2,300 </td>
              <td className="px-1 py-4 text-sm "> JUN 23 ,2023 </td>
              <td className="px-1 py-4">
                <span className="px-2 py-1  text-[8px] text-[#03543F] text-center bg-[#DEF7EC] rounded-xl">
                  Completed
                </span>
                {/* <span className="px-2 py-1  text-[8px] text-[#FF5B5B] text-center bg-[#F5DBE0] rounded-xl">
                  Completed
                </span> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryTable;
