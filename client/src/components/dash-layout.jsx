import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "./dash-header";
import { DashboardFooter } from "./dash-footer";

export const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <div>
        <Outlet />
      </div>
      <DashboardFooter />
    </>
  );
};
