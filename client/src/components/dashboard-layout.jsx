import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "./dashboard-header";
import { DashboardFooter } from "./dashboard-footer";

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
