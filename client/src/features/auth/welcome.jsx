import React from "react";
import { Link } from "react-router-dom";
import { NOTES, USERS } from "../../router";

export const Welcome = () => {
  return (
    <>
      <h2>Welcome</h2> <br />
      <Link to={NOTES}>View Notes</Link> <br />
      <Link to={USERS}>View User Settings</Link>
    </>
  );
};
