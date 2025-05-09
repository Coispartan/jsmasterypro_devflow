import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import AuthStatus from "./AuthStatus";

const LeftSiderBar = () => {
  return (
    <div className="flex">
      <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
        <div className="flex flex-1 flex-col gap-6">
          <NavLinks isMobileNav={false} />
        </div>
        <div className="flex flex-col gap-3">
          <AuthStatus />
        </div>
      </section>
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
        All Questions
      </section>
      <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
        Top Questions
      </section>
    </div>
  );
};

export default LeftSiderBar;
