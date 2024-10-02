"use client";

import React from "react";
import DashboardLayout from "./DashboardLayout";
import { useViewModel } from "./useViewmodel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { 
    user,
  } = useViewModel();

  return (
    <DashboardLayout
      userProfile={user}
    >
      {children}
    </DashboardLayout>
  );
};

export default Layout;
