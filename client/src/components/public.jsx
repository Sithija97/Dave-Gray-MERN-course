import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../router";

export const Public = () => {
  return (
    <div>
      Welcome to Dan D Repairs
      <br />
      <Link to={LOGIN}>Login</Link>
    </div>
  );
};
