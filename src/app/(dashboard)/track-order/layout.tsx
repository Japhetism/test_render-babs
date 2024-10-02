"use client";

import React from "react";

const PickUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex flex-col items-start justify-start w-full font-barlow relative">
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default PickUpLayout;
