"use client";
import React, { useState } from "react";
import { Regions } from "../productUpload";
import Select from "../Select";
import Toggler from "../toggler/toggler";
import {
  admin1,
  admin2,
  admin3,
} from "../../../public/assets/dashboard/product";
import MoreIcon from "../../../public/assets/icons/products/moreIcon";
import Image, { StaticImageData } from "next/image";
import Modal from "../Modal";

interface IAdmins {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Admins = ({ showModal, setShowModal}: IAdmins) => {
  const [activeTab, setTabActive] = useState(1);

  return (
    <>
      <>
        <div className="flex items-center mb-4">
          <div
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
              backgroundColor:
                activeTab === 1 ? "rgba(0, 176, 116, 0.15)" : "transparent",
              color: activeTab === 1 ? "#3BB77E" : "#A3A3A3",
            }}
            className="w-1/2 py-5 bg-[#ffffff] cursor-pointer flex justify-center text-[#A3A3A3] font-medium text-base"
            onClick={() => setTabActive(1)}
          >
            Super admins
          </div>

          <div
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
              backgroundColor:
                activeTab === 2 ? "rgba(0, 176, 116, 0.15)" : "transparent",
              color: activeTab === 2 ? "#3BB77E" : "#A3A3A3",
            }}
            className="w-1/2 py-5 cursor-pointer flex justify-center font-medium text-base"
            onClick={() => setTabActive(2)}
          >
            Admins
          </div>
        </div>
        <table className="w-full">
          <tbody className="p-4">
            <tr className="bg-[#F3F3F3] rounded-sm mb-2">
              <td className="p-3 w-1/2">
                <div className="flex items-center">
                  <span className="mr-4 text-base font-semibold font-poppins">
                    01
                  </span>
                  <div className="flex">
                    <Image src={admin1} alt="Product" />
                    <div className="ml-3">
                      <p className="text-base font-medium text-[#3A3A3A] font-poppins">
                        Francis Maximus
                      </p>
                      <p className="text-xs font-normal text-[#3A3A3A] font-poppins">
                        Francismax@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </td>

              <td className="">
                <div className=" text-sm text-[#6B7280] font-normal">
                  Imo state
                </div>{" "}
              </td>

              <td>
                {" "}
                <MoreIcon />{" "}
              </td>
            </tr>

            <tr className="bg-[#ffffff] rounded-sm mb-2">
              <td className="p-3 w-1/2">
                <div className="flex items-center">
                  <span className="mr-4 text-base font-semibold font-poppins">
                    02
                  </span>
                  <div className="flex">
                    <Image src={admin2} alt="Product" />
                    <div className="ml-3">
                      <p className="text-base font-medium text-[#3A3A3A] font-poppins">
                        Sonia Edith
                      </p>
                      <p className="text-xs font-normal text-[#3A3A3A] font-poppins">
                        Soniaede@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </td>

              <td className="">
                <div className=" text-sm text-[#6B7280] font-normal">
                  Rivers state
                </div>{" "}
              </td>

              <td>
                {" "}
                <MoreIcon />{" "}
              </td>
            </tr>

            <tr className="bg-[#F3F3F3] rounded-sm">
              <td className="p-3 w-1/2">
                <div className="flex items-center">
                  <span className="mr-4 text-base font-semibold font-poppins">
                    03
                  </span>
                  <div className="flex">
                    <Image src={admin3} alt="Product" />
                    <div className="ml-3">
                      <p className="text-base font-medium text-[#3A3A3A] font-poppins">
                        Harrison Obi
                      </p>
                      <p className="text-xs font-normal text-[#3A3A3A] font-poppins">
                        HarrisonObi@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </td>

              <td className="">
                <div className=" text-sm text-[#6B7280] font-normal">
                  Kaduna state
                </div>{" "}
              </td>

              <td>
                {" "}
                <MoreIcon />{" "}
              </td>
            </tr>

            <tr className="bg-[#ffffff] rounded-sm mb-2">
              <td className="p-3 w-1/2">
                <div className="flex items-center">
                  <span className="mr-4 text-base font-semibold font-poppins">
                    04
                  </span>
                  <div className="flex">
                    <Image src={admin2} alt="Product" />
                    <div className="ml-3">
                      <p className="text-base font-medium text-[#3A3A3A] font-poppins">
                        Sonia Edith
                      </p>
                      <p className="text-xs font-normal text-[#3A3A3A] font-poppins">
                        Soniaede@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </td>

              <td className="">
                <div className=" text-sm text-[#6B7280] font-normal">
                  Rivers state
                </div>{" "}
              </td>

              <td>
                {" "}
                <MoreIcon />{" "}
              </td>
            </tr>

            <tr className="bg-[#F3F3F3] rounded-sm mb-2">
              <td className="p-3 w-1/2">
                <div className="flex items-center">
                  <span className="mr-4 text-base font-semibold font-poppins">
                    05
                  </span>
                  <div className="flex">
                    <Image src={admin1} alt="Product" />
                    <div className="ml-3">
                      <p className="text-base font-medium text-[#3A3A3A] font-poppins">
                        Francis Maximus
                      </p>
                      <p className="text-xs font-normal text-[#3A3A3A] font-poppins">
                        Francismax@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </td>

              <td className="">
                <div className=" text-sm text-[#6B7280] font-normal">
                  Imo state
                </div>{" "}
              </td>

              <td>
                {" "}
                <MoreIcon />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </>
      {showModal && (
        <Modal height="max-content">
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 space-y-4">
                <h2 className="text-lg font-semibold mb-4">Add a New Admin</h2>
                <input
                  name="username"
                  type="text"
                  className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                  placeholder="Admin Username"
                />
                <input
                  name="Password"
                  type="password"
                  className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none "
                  placeholder="Admin Password"
                />
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
                        onClick={() => setShowModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={() => {}}
                    >
                        Create Admin
                    </button>
                </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Admins;
