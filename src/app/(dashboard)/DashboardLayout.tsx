"use client";

import React, { useLayoutEffect, useState } from "react";
import { SideBar, Header, Overlay, Footer } from "@/components";
import NewSidebar from "@/components/NewSidebar";
import { useUserStore } from "@/state";
import { AdminProfile } from "@/types/profile";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const DashboardLayout = ({
  children,
  userProfile,
}: {
  children: React.ReactNode;
  userProfile: AdminProfile;
}) => {
  const { setUser, user } = useUserStore(state => state);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useLayoutEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    user &&
    <Theme accentColor="jade">
      <main className="flex">
        {/* <SideBar open={openMenu} setOpen={setOpenMenu} /> */}
        <Overlay open={openMenu} setOpen={setOpenMenu} />
        <NewSidebar open={openMenu} setOpen={setOpenMenu} />
        <div className="flex flex-grow flex-col xl:gap-[42px] lg:gap-8 gap-5 w-full xl:py-10 lg:py-[30px] py-[15px] xl:px-[50px] lg:px-[37px] md:px-5 px-3 bg-[#f7f6fb] h-screen overflow-y-scroll">
          <Header setOpen={setOpenMenu} />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </Theme>
  );
};

export default DashboardLayout;
