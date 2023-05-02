import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
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
          {/* <Link to="/login">
            <button className="btn btn-primary mt-[-10px]">Login</button>
          </Link> */}
          {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary mt-[-10px]"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary mt-[-10px]">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
