"use client";

import { products_pickup } from "@/utils/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PickupDesign } from "../../../../public/assets/icons";
import Modal from "@/components/Modal";

type Props = {};

function page({}: Props) {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const router = useRouter();

  // console.log(data);

  useEffect(() => {
    if (!localStorage.getItem("summaryProductId")) {
      setData("");
    } else {
      setData(localStorage.getItem("summaryProductId"));
    }
  }, []);

  const submitModal = (e: any) => {
    localStorage.setItem("summaryProductId", inputValue);
    // alert("your product is entered is: " + inputValue);
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-start justify-start xl:gap-[75px] lg:gap-16 gap-8 w-full h-full font-barlow relative">
      {data !== "" ? (
        <>
          <div className="flex flex-col items-start justify-normal w-full">
            <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-[#464255]">
              Product receipt
            </h2>
            <p className="xl:text-lg lg:text-base text-sm font-normal text-[#a3a3a3]">
              Receipt of product
            </p>
          </div>

          <div className="flex flex-col bg-white w-full rounded-2xl shadow-sm font-barlow py-7 mb-7 relative">
            <div className="flex w-full items-center gap-32 py-5">
              <div
                className={`border-[#FFCB45] border-e-[6px] w-1 h-36 rounded-2xl`}
              ></div>

              <div className="flex items-center gap-5">
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
                    Tony Briggs
                  </p>
                  <p className="text-[20px] text-[#A3A3A3] font-medium">
                    Tonybriggs@gmail.com
                  </p>
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
                    {products_pickup.map((data) => (
                      <div
                        key={data.id}
                        className="flex flex-col items-start py-4 ps-10"
                      >
                        <p className="text-[#111827]  text-xl py-1 font-semibold leading-3">
                          {data.product_name}
                        </p>
                        <p className="text-xs font-medium text-[#a3a3a3]">
                          {data.product_code}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-[0.4] ps-2">
                  <h2 className="xl:text-2xl lg:text-xl text-lg font-semibold text-[#111827] px-5 py-3">
                    Number of Products
                  </h2>
                  <div className="pick-up-container relative z-[999]">
                    {products_pickup.map((data) => (
                      <div
                        key={data.id}
                        className="flex flex-col items-start py-3 ps-10"
                      >
                        <p className="text-[#111827]  text-2xl py-1 font-semibold leading-3">
                          {data.number_of_product}
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
              <div className="flex items-center justify-end w-full py-5">
                {/* change this icons to arrows */}
                <button className="bg-white border-[2px] border-primary_100 text-primary_100/60 text-center text-lg font-medium transition-all ease-in duration-300 hover:bg-primary_100 hover:text-white font-barlow ms-5 py-2 px-4 rounded-md ml-auto flex justify-center">
                  previous
                </button>

                {/* change it to next. */}
                {/* this next button will redirect to the recipt of another person. */}
                <button className="bg-primary_100 text-white text-center text-lg font-medium transition-all ease-in-out duration-200 hover:opacity-80 font-barlow ms-5 py-2 px-4 rounded-md ml-auto flex justify-center">
                  Next
                </button>
              </div>
            </div>

            <div className="h-[35px] absolute top-0 right-[7em]">
              <PickupDesign />
            </div>

            <div className="h-[35px] absolute bottom-0 left-[7em]">
              <PickupDesign />
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              router.push("/pick-up/pickup-dashboard");
            }}
            className="absolute top-0 right-0 z-30 bg-white text-[#3BB77E] font-barlow font-medium px-6 py-3 capitalize rounded-md shadow-sm text-sm 
          shadow-black/20 hover:bg-[#f7f7f7] transition-all ease-out duration-300 active:bg-white"
          >
            pickup management
          </button>
          <Modal>
            <p className="text-center font-barlow text-[#3E4954] text-[22px] max-w-[60%] font-semibold mt-5">
              Enter product ID number for confirmation and pick up
            </p>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="outline-none border-[2px] border-black/20 py-2 px-3 w-[60%] rounded-md placeholder:text-center placeholder:text-black/20 font-barlow font-semibold text-center text-[#464255] mt-20"
              placeholder="#1-3-2-4-3-2"
            />

            <button
              className={`px-14 py-2 ${
                inputValue === ""
                  ? "bg-[#F4F4F4] text-[#C9C9C9] border-[2px] border-[#C9C9C9]"
                  : "bg-[#3BB77E] text-white"
              }    rounded-md font-barlow font-medium capitalize mt-20 outline-none`}
              onClick={submitModal}
              disabled={!inputValue}
            >
              confirm
            </button>
          </Modal>
        </>
      )}
    </div>
  );
}

export default page;
