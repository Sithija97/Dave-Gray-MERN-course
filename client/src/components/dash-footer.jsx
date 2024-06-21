import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DASH } from "../router";

export const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate(DASH);

  let goHomeButton = null;
  if (pathname !== DASH) {
    goHomeButton = <button title="Home" onClick={onGoHomeClicked} />;
  }
  return (
    <div>
      <h6>Current user:</h6>
      <h6>Status:</h6>
    </div>
  );
};
