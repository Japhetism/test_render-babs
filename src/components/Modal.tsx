"use client";

import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  height?: any;
  paddingTop?: any;
};

const Modal = ({ children, height, paddingTop }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-evenly pt-[7%] ps-[20%]`}
      style={
        paddingTop
          ? {
              paddingTop: paddingTop,
            }
          : {}
      }
    >
      <div className="w-[600px]">
        <div
          className={`bg-white rounded-[15px] p-2 min-h-[400px]
          flex flex-col items-center shadow-md shadow-black/30`}
          style={height ? { minHeight: height } : {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
