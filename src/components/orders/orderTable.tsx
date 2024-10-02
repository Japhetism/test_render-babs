"use client";
import React from "react";
import { Regions } from "../productUpload";
import Select from "../Select";
import Toggler from "../toggler/toggler";
import { useRouter } from "next/navigation";
// import Switch from "react-js-switch";

type TableProps = {
  title?: string;
  subTitle?: string;
  name?: string;
  phone?: number;
  email?: string;
  location?: string;
  idNumber?: string;
  amount?: number;
  date?: string;
  payment?: boolean;
  icon?: React.ReactNode;
  className?: string;
  borderColor?: string;
  testArray: number[];
};

interface Option {
  value: string;
  label: string;
}

const OrdersTable = ({
  name,
  phone,
  email,
  location,
  idNumber,
  amount,
  date,
  payment,
  borderColor,
  title,
  subTitle,
  className,
  testArray,
}: TableProps) => {
  // const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [toggleOption, setToggleOption] = React.useState(false);

  const router = useRouter();

  const switch_onChange_handle = () => {
    // setIsSwitchOn(!isSwitchOn);
    //...
  };

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (selectedItems: Option[]) => {
    console.log(selectedItems);
  };

  return (
    <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
      <div
        className={`${borderColor} border-e-[6px] w-1 h-36 rounded-2xl`}
      ></div>

      <div className="ps-3 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-xl text-[#111827] font-inter ">
              {title}
            </p>
            <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
              {subTitle}
            </p>
          </div>

          <div className="flex self-start w-2/4">
            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Location
              </option>
            </Select>
            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Day
              </option>
            </Select>

            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Month
              </option>
            </Select>

            <Select
              bodyClassName="flex me-2"
              selectClassName="p-2 flex pe-7 shadow-md"
              iconClassName="w-4 top-[16px] right-[10px]"
            >
              <option
                className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                value="city1"
              >
                Year
              </option>
            </Select>
          </div>
        </div>

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
                <th className="text-start"> View order </th>
                <th className="text-start"> Confirm </th>
              </tr>
            </thead>
            <tbody>
              {testArray.map((item, index) => (
                <tr
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#F9FAFB",
                  }}
                  className="p-4 font-inter text-[#111827]"
                  key={index}
                >
                  <td className="px-1 py-4 text-sm ">{name}</td>
                  <td className="px-1 py-4 text-sm font-semibold">{phone}</td>
                  <td className="px-1 py-4 text-sm "> {email}</td>
                  <td className="px-1 py-4 text-sm "> {location} </td>
                  <td className="px-1 py-4 text-sm text-[#6B7280] ">
                    {" "}
                    {idNumber}{" "}
                  </td>
                  <td className="px-1 py-4 text-sm "> N{amount} </td>
                  <td className="px-1 py-4 text-sm text-[#6B7280] "> {date}</td>
                  <td className="px-1 py-4">
                    {payment ? (
                      <span className="px-2 py-1  text-[8px] text-[#03543F] text-center bg-[#DEF7EC] rounded-xl">
                        Completed
                      </span>
                    ) : (
                      <span className="px-2 py-1  text-[8px] text-[#FF5B5B] text-center bg-[#F5DBE0] rounded-xl">
                        On Delivery
                      </span>
                    )}
                  </td>
                  <td className="px-2 text-sm ">
                    <div
                      onClick={() => {
                        // set active
                        // isActive(true);
                        router.push("/pick-up"); //add new page for product recipt.
                      }}
                      className="border p-[2px] border-[#3BB77E] rounded-md font-normal text-[10px] flex items-center justify-center text-[#3BB77E] cursor-pointer"
                    >
                      view
                    </div>
                  </td>
                  <td className="px-1 py-4 text-sm ">
                    {" "}
                    {/* <switch
                      values={true}
                      onChange={switch_onChange_handle}
                    />{" "}
                    <Toggler
                      toggleOption={toggleOption}
                      setToggleOption={setToggleOption}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="submit"
          className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center ml-auto mt-5"
          // onClick={() => console.log("logged")}
        >
          Download Summary
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
