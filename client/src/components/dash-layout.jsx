import React from "react";
import { Outlet } from "react-router-dom";
import { DashHeader } from "./dash-header";
import { DashFooter } from "./dash-footer";

export const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div>
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
