"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PickupDesign } from "../../../../../../public/assets/icons";
import { DriverSelector } from "../../../../../../public/assets/icons/pick-up";
import { OrderlistUsers } from "@/utils/users";
import { Select } from "@/components";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

function AssignPage({ params: { slug } }: { params: { slug: string } }) {
  const router = useRouter();
  const [driver, setDriver] = useState(false);
  const [assignDriver, setAssignDriver] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start xl:gap-[75px] lg:gap-16 gap-8 w-full h-full font-barlow relative">
      {driver === false || assignDriver === true ? (
        <>
          <div className="flex flex-col bg-white w-full rounded-2xl shadow-sm font-barlow py-7 mb-7 relative">
            {/* header */}
            <div className="flex w-full h-[300px] items-center py-5 relative">
              <div
                className={`border-[#FFCB45] border-e-[6px] w-1 h-36 rounded-2xl`}
              ></div>

              <div className="flex items-center justify-center gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
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
                  <div>
                    <p className="text-[20px] text-[#A3A3A3] font-medium flex items-center justify-center gap-4">
                      Tonybriggs@gmail.com{" "}
                      <span className="text-black text-4xl font-thin">|</span>{" "}
                      Rukpokwu Portharcourt
                    </p>
                    <div className="flex items-center justify-start gap-[7.5rem]">
                      <p className="text-[20px] text-[#A3A3A3] font-medium">
                        80845645545
                      </p>
                      <p className="text-[20px] text-[#A3A3A3] font-medium">
                        Location goes here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* body */}
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="font-semibold text-xl text-[#111827] font-inter w-max">
                ID NUMBER: <span className="font-normal">#{slug}</span>
              </h2>

              {/* form */}
              <div className="mt-5 w-full max-w-5xl px-10 border-opacity-50 border-[2px] shadow-sm rounded-lg mx-auto py-10">
                <div className="flex items-center justify-between font-inter mb-12">
                  <p className="text-[#111827] font-semibold">Location</p>
                  <div className="min-w-[150px]">
                    <p className="text-[#6B7280] font-normal">
                      Location goes here
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between font-inter mb-12">
                  <p className="text-[#111827] font-semibold">Amount</p>
                  <div className="min-w-[150px]">
                    <p className="text-[#6B7280] font-normal">
                      Amount goes here
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between font-inter mb-12">
                  <p className="text-[#111827] font-semibold">Payment Status</p>
                  <div className="min-w-[150px]">
                    <p className="text-[#6B7280] font-normal ">
                      payment status
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between font-inter ">
                  <p className="text-[#111827] font-semibold">Date</p>
                  <div className="min-w-[150px]">
                    <p className="text-[#6B7280] font-normal">Date goes here</p>
                  </div>
                </div>
              </div>

              {assignDriver === true ? (
                <>
                  {/* Assigned driver */}
                  <div className="w-full flex items-center flex-col py-10">
                    <h2 className="font-semibold text-xl text-[#111827] font-inter w-max mb-10">
                      Driver
                    </h2>

                    <div className="flex items-center justify-center gap-10">
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

                      <div className="font-barlow flex flex-col items-center">
                        <p className="text-[30px] text-[#464255] font-semibold">
                          Tony Briggs
                        </p>
                        <div className="flex flex-col items-center">
                          <p className="text-[20px] text-[#A3A3A3] font-medium flex items-center justify-center gap-4">
                            Tonybriggs@gmail.com{" "}
                          </p>
                          <p className="text-[20px] text-[#A3A3A3] font-medium flex items-center justify-center gap-4">
                            Rukpokwu Portharcourt{" "}
                          </p>
                          <p className="text-[20px] text-[#A3A3A3] font-medium flex items-center justify-center gap-4">
                            80845645545{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-center gap-5 my-10
    "
                    >
                      <button
                        onClick={() => {
                          setDriver(true);
                          setAssignDriver(false);
                        }}
                        className="bg-white border-[2px] border-primary_100 text-primary_100/60 text-center text-lg font-medium transition-all ease-in duration-300 hover:bg-primary_100 hover:text-white font-barlow ms-5 py-2 px-4 rounded-md ml-auto flex justify-center"
                      >
                        Change Driver
                      </button>

                      <button
                        onClick={() => setModal(true)}
                        className="bg-primary_100 text-white text-center text-lg font-medium transition-all ease-in-out duration-200 hover:opacity-80 font-barlow ms-5 py-2 px-4 rounded-md ml-auto flex justify-center"
                      >
                        Assign Order
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* select driver */}
                  <div className="w-full max-w-5xl px-10 mx-auto flex flex-col items-center py-10">
                    <p className="text-[#111827] font-semibold text-lg mb-5">
                      Select Driver
                    </p>

                    {/* driver selector */}
                    <div className="flex items-centerjustify-center w-full max-w-lg mx-auto gap-1">
                      <div className="flex-grow border-[#A1A1A1] rounded-lg shadow-sm border-[2px] border-opacity-50 flex items-center gap-2">
                        <div className="border-black/30 border-r-[2px] h-[30px] w-[100px]"></div>
                        <p className="text-[#6B7280] flex-grow font-semibold font-inter">
                          Anyanwu Olamide
                        </p>
                      </div>

                      <div className="bg-[#3BB77E]  flex items-center justify-center p-3 py-5 rounded-md shadow-sm shadow-black/20 cursor-pointer min-w-[90px]">
                        <DriverSelector />
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setDriver(true);
                        setAssignDriver(false);
                      }}
                      className="bg-primary_100 text-white text-center text-lg font-normal hover:opacity-80 font-barlow px-5 py-3 rounded-md flex justify-center mt-5"
                    >
                      Assign Order
                    </button>
                  </div>
                </>
              )}
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
          <div className="flex items-center bg-white w-full rounded-2xl shadow-sm font-barlow py-7 pe-7 mb-7">
            <div
              className={`border-[#3BB77E] border-e-[6px] w-1 h-36 rounded-2xl`}
            ></div>

            <div className="ps-3 w-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-xl text-[#111827] font-inter ">
                    Select Delivery Driver
                  </p>
                  <p className="font-normal text-base text-[#71717A] mb-4 font-inter">
                    Pick from delivery drivers list
                  </p>
                </div>
              </div>

              <div className="w-full mt-5">
                <table className="w-full">
                  <thead className="text-start font-inter text-sm text-[#6B7280] bg-[#F9FAFB]">
                    <tr>
                      <th className="text-start  py-4 px-1"> Name </th>
                      <th className="text-start"> Phone Number </th>
                      <th className="text-start"> EMAILS </th>
                      <th className="text-start"> State </th>
                      <th className="text-start">LGA </th>
                      <th className="text-start"> Center </th>
                    </tr>
                  </thead>
                  <tbody>
                    {OrderlistUsers.map((data) => (
                      <tr
                        onClick={() => {
                          setAssignDriver(true);
                          setDriver(false);
                        }}
                        style={{
                          backgroundColor:
                            data.id % 2 === 0 ? "#ffffff" : "#F9FAFB",
                        }}
                        className="p-4 font-inter text-[#111827] cursor-pointer"
                        key={data.id}
                      >
                        <td className="px-1 py-4 text-sm ">{data.name}</td>
                        <td className="px-1 py-4 text-sm font-semibold">
                          {data.phone}
                        </td>
                        <td className="px-1 py-4 text-sm "> {data.email}</td>
                        <td className="px-1 py-4 text-sm ">Rivers state </td>
                        <td className="px-1 py-4 text-sm text-[#6B7280] ">
                          {" "}
                          {data.location}
                        </td>
                        <td className="px-1 py-4 text-sm "> {data.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {modal && (
        <Modal height={"200px"} paddingTop={"1%"}>
          <div className="flex flex-col items-center justify-end w-full h-[100px] gap-10 mt-10">
            <h2 className="font-semibold text-xl text-[#111827] font-inter w-max ">
              Order Assigned Successfully
            </h2>

            <button
              onClick={() =>
                router.push("/pick-up/pickup-dashboard/unassigned-orders")
              }
              className="bg-primary_100 text-white text-center text-lg font-medium transition-all ease-in-out duration-200 hover:opacity-80 font-barlow ms-5 py-2 px-4 rounded-md ml-auto flex justify-center"
            >
              Done
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AssignPage;
