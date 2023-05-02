import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MAIN = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MAIN;
