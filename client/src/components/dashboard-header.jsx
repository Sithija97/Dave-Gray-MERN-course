import React from "react";
import { Link } from "react-router-dom";
import { ROOT } from "../router";

export const DashboardHeader = () => {
  return (
    <div>
      <Link to={ROOT}>
        <h1>Teach Notes</h1>
      </Link>
    </div>
  );
};
