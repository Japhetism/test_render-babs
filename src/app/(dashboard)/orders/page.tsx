"use client";

import React, { useEffect, useState } from "react";
import { PickupDesign, Printer } from "../../../../public/assets/icons";
import Image from "next/image";
import { Select } from "@/components";
import { OrderlistUsers } from "@/utils/users";
import Modal from "@/components/Modal";
import { historyColumns } from "@/utils/order/historyColumns";
import { completedColumns } from "@/utils/order/completedColumns";
import OrderListTable from "@/components/orders/orderListTable";
import { useViewModel } from "./useViewmodel";
import Notification from "@/components/notification";

const OrdersPage = () => {
  const {
    isLoading,
    errorMessage,
    orders,
    setErrorMessage,
  } = useViewModel();

  console.log("orders are ", orders);

  const [isActive, setIsActive] = useState(false);
  const [showPacked, setShowPacked] = useState(false);
  const [Id, setId] = useState(0);
  const [complete, setComplete] = useState(false);

  const completePacking = () => {
    setComplete(true);
    setShowPacked(false);
  };

  return (
    <>
      <div className="flex justify-between w-full mb-10">
        <div className="flex flex-col items-start justify-normal w-full">
          <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
            {!isActive ? "Order list" : "Product receipt"}
          </h2>
          <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
            {!isActive ? "Order list for products" : "Receipt of product"}
          </p>
        </div>
      </div>

      {!isActive ? (
        <>
          <OrderListTable 
            isLoading={isLoading}
            title="Order history"
            description="List of orders by customers"
            columns={historyColumns}
            data={OrderlistUsers}
            borderColor="#3BB77E"
          >
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
                  Filter Orders By
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="pending"
                >
                  Pending
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="unconfirmed"
                >
                  Unconfirmed
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="unavailable"
                >
                  Unavailable
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
          </OrderListTable>

          <OrderListTable
            isLoading={isLoading}
            title=" Orders Completed"
            description="List of completed orders"
            data={OrderlistUsers}
            columns={completedColumns}
            borderColor="#FFCB45"
          >
            <div className="flex self-start w-2/4">
              <Select
                bodyClassName="flex me-2"
                selectClassName="p-2 flex pe-7 shadow-md"
                iconClassName="w-4 top-[16px] right-[10px]"
              >
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value=""
                >
                  Delivery Type
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="pickup"
                >
                  Pickup Station
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="store"
                >
                  Pickup In Store
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="home"
                >
                  Home Delivery
                </option>
              </Select>
              <Select
                bodyClassName="flex me-2"
                selectClassName="p-2 flex pe-7 shadow-md"
                iconClassName="w-4 top-[16px] right-[10px]"
              >
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value=""
                >
                  Vend State
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="Lagos"
                >
                  Lagos
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="Abuja"
                >
                  Abuja
                </option>
                <option
                  className="font-inter xl:text-xl md:text-lg text-base text-dark_500 p-3"
                  value="Rivers"
                >
                  Rivers
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
          </OrderListTable>
        </>
      ) : (
        <>
          <div className="flex flex-col bg-white w-full rounded-2xl shadow-sm font-barlow py-7 mb-7 relative">
            <div className="flex items-center justify-start gap-3">
              <p className="ms-5 font-semibold text-[15px] text-[#464255] flex items-center justify-start gap-2">
                <span className="font-poppins text-sm"> Recipt ID:</span>
                <span className="text-[#A3A3A3] font-normal text-sm font-inter">
                  19dj28sal3asi9o23
                </span>
              </p>
              <button onClick={() => alert("print")}>
                <Printer />
              </button>
            </div>
            <div className="flex w-full items-center gap-32 py-5">
              <div
                className={`border-[#FFCB45] border-e-[6px] w-1 h-36 rounded-2xl`}
              ></div>

              <div className="flex items-center relative w-full me-5 gap-5">
                <div className="bg-[#D9F3EA] h-[200px] w-[200px] rounded-full shadow-md shadow-black/20 p-[0.35rem]">
                  <div className="h-full w-full relative rounded-full overflow-hidden">
                    <Image
                      fill
                      src="https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                      alt="profile image"
                      className="object-center object-cover"
                    />
                  </div>
                </div>

                <div className="font-barlow flex flex-col items-start">
                  <p className="text-[30px] text-[#464255] font-semibold">
                    {OrderlistUsers[Id].name}
                  </p>
                  <p className="text-[20px] text-[#A3A3A3] font-medium">
                    {OrderlistUsers[Id].email}
                  </p>
                </div>

                {/* packed button */}
                <div className="absolute top-0 right-0">
                  <button
                    type="submit"
                    className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow p-2 rounded-md flex justify-center ml-auto "
                    onClick={() => setShowPacked(true)}
                  >
                    Show packed
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-grow px-5">
              <div className="h-max flex">
                <div className="flex-[0.6] pe-2 flex flex-col">
                  <h2 className="xl:text-2xl lg:text-xl text-lg font-semibold text-[#111827] px-5 py-3">
                    Products
                  </h2>
                  <div className="pick-up-container ">
                    {OrderlistUsers[Id].products.map((data: any) => (
                      <div
                        key={data.id}
                        className="flex flex-col items-start py-4 ps-10"
                      >
                        <p className="text-[#111827]  text-xl py-1 font-semibold leading-3">
                          {data.name}
                        </p>
                        <p className="text-xs font-medium text-[#a3a3a3]">
                          {data.productId}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-[0.4] ps-2">
                  <h2 className="xl:text-2xl lg:text-xl text-lg font-semibold text-[#111827] px-5 py-3">
                    Number of Products
                  </h2>
                  <div className="pick-up-container">
                    {OrderlistUsers[Id].products.map((data: any) => (
                      <div
                        key={data.id}
                        className="flex flex-col items-start py-3 ps-10"
                      >
                        <p className="text-[#111827]  text-2xl py-1 font-semibold leading-3">
                          {data.quantity}
                        </p>
                        <p className="text-lg font-normal text-[#a3a3a3]">
                          pcs
                        </p>
                      </div>
                    ))}

                    <div className="h-[85px] w-[5px] bg-primary_100 rounded-[5px] absolute bottom-[4rem] right-[-5px] z-0" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full py-5 mb-5">
                <p className="ms-5 font-semibold text-lg text-[#464255] flex items-center justify-start gap-2">
                  <span className="font-poppins"> Total Amount:</span>
                  <span className="text-[#A3A3A3] font-normal font-inter">
                    $ 4000
                  </span>
                </p>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      Id > 0 ? setId(Id - 1) : {};
                      setComplete(false);
                    }}
                    className={`rounded-full bg-primary_100 xl:p-[10px] p-2 focus:outline-none rotate-180 hidden md:flex items-center justify-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`xl:w-6 xl:h-6 w-4 h-4`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </button>

                  <button
                    disabled={!complete}
                    onClick={() => {
                      Id < OrderlistUsers.length - 1 ? setId(Id + 1) : {};

                      setComplete(false);
                    }}
                    className={`rounded-full bg-primary_100 ${
                      !complete && "bg-primary_100/50 cursor-not-allowed"
                    } xl:p-[10px] p-2 focus:outline-none rotate-0 hidden md:flex items-center justify-center `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`xl:w-6 xl:h-6 w-4 h-4`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L17.5858 12L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="h-[35px] absolute top-0 right-[7em]">
              <PickupDesign />
            </div>

            <div className="h-[35px] absolute bottom-0 left-[7em]">
              <PickupDesign />
            </div>

            {/* packed items */}
            {showPacked && (
              <Modal height={"max-content"}>
                <div className="w-full h-full relative p-5">
                  <div>
                    <p className="font-semibold text-xl text-[#111827] font-inter ">
                      Packed items
                    </p>
                    <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                      List of packed items of customer
                    </p>
                  </div>
                  <div className="flex mt-3 ">
                    <div className="flex-grow">
                      <p className="font-normal text-base text-[##71717A] mb-4 font-inter">
                        Product
                      </p>
                      <div className="mt-4">
                        {OrderlistUsers[Id].products.map((data: any) => (
                          <div
                            key={data.id}
                            className="flex items-center justify-start gap-2"
                          >
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="h-[15px] w-[15px] rounded-full border-primary_100 cursor-pointer"
                            />

                            <p className="text-[#71717A] text-sm py-3 font-semibold leading-3">
                              {data.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-[0.4]">
                      <p className="font-normal text-base text-[#111827] mb-4 font-inter">
                        Status
                      </p>
                      <div className="mt-4">
                        {OrderlistUsers[Id].products.map((data: any) => (
                          <div
                            key={data.id}
                            className="flex items-center justify-start gap-2"
                          >
                            <div className="h-[10px] w-[10px] bg-primary_100 rounded-full" />
                            <p className="text-[#71717A] text-sm py-3 font-semibold leading-3">
                              packed
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 mt-3">
                    <button className="border-primary_100 border-[2px] text-primary_100 text-center text-lg font-normal hover:opacity-80 font-barlow px-4 py-1 rounded-md flex justify-center ">
                      Mark as done
                    </button>

                    <button
                      onClick={completePacking}
                      className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow px-4 py-1 rounded-md flex justify-center "
                    >
                      Complete
                    </button>
                  </div>

                  <svg
                    onClick={() => setShowPacked(false)}
                    className="w-5 h-4 top-5 right-5 absolute cursor-pointer"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41285 17.0471L11.4464 13.0136L15.4799 17.0471L17.0484 15.4785L13.0149 11.445L17.0484 7.41151L15.4799 5.84293L11.4464 9.87643L7.41285 5.84293L5.84427 7.41151L9.87777 11.445L5.84427 15.4785L7.41285 17.0471ZM11.4464 22.6492C9.89644 22.6492 8.4399 22.3549 7.07673 21.7663C5.71356 21.1777 4.52778 20.3796 3.51941 19.372C2.51103 18.3636 1.71292 17.1778 1.12508 15.8146C0.537231 14.4515 0.242934 12.9949 0.242188 11.445C0.242188 9.8951 0.536484 8.43856 1.12508 7.07539C1.71367 5.71221 2.51178 4.52644 3.51941 3.51806C4.52778 2.50969 5.71356 1.71158 7.07673 1.12373C8.4399 0.535888 9.89644 0.241592 11.4464 0.240845C12.9963 0.240845 14.4528 0.535141 15.816 1.12373C17.1792 1.71233 18.3649 2.51044 19.3733 3.51806C20.3817 4.52644 21.1802 5.71221 21.7688 7.07539C22.3573 8.43856 22.6513 9.8951 22.6505 11.445C22.6505 12.9949 22.3562 14.4515 21.7676 15.8146C21.179 17.1778 20.3809 18.3636 19.3733 19.372C18.3649 20.3803 17.1792 21.1788 15.816 21.7674C14.4528 22.356 12.9963 22.6499 11.4464 22.6492ZM11.4464 20.4083C13.9486 20.4083 16.0681 19.54 17.8047 17.8034C19.5414 16.0667 20.4097 13.9473 20.4097 11.445C20.4097 8.94275 19.5414 6.82329 17.8047 5.08665C16.0681 3.35 13.9486 2.48168 11.4464 2.48168C8.94409 2.48168 6.82464 3.35 5.08799 5.08665C3.35134 6.82329 2.48302 8.94275 2.48302 11.445C2.48302 13.9473 3.35134 16.0667 5.08799 17.8034C6.82464 19.54 8.94409 20.4083 11.4464 20.4083Z"
                      fill="#525252"
                    />
                  </svg>
                </div>
              </Modal>
            )}
          </div>
        </>
      )}
      {errorMessage && (
        <Notification
          isError={Boolean(errorMessage)}
          message={errorMessage}
          onClose={(message: string) => setErrorMessage(message)}
        />
      )}
    </>
  );
};

export default OrdersPage;
