import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-gray-50 p-[40px]">
        <div>
          <h1 className="text-[50px] mx-[80px] font-title font-bold">
            SimplyRecipes
          </h1>
        </div>

        <div className="flex gap-[70px] cursor-pointer text-[18px] font-semibold my-[10px]">
          <Link classname="" to="/Home">
            Home
          </Link>
          <Link classname="" to="/Blog">
            Blog
          </Link>
          <button className="btn btn-primary mt-[-10px]">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
