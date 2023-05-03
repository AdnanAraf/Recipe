import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../Active/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const Enter = () => {
    setHover(true);
  };
  const Leave = () => {
    setHover(false);
  };

  console.log(user?.name);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="lg:flex lg:justify-between  bg-gray-50 lg:p-[40px]">
        <div>
          <h1 className="lg:text-[50px] text-[20px] lg:mx-[80px] lg:font-title font-bold">
            SimplyRecipes
          </h1>
        </div>

        <div className="lg:flex flex justify-between  my-[40px] lg:gap-[70px] cursor-pointer text-[18px] font-semibold lg:my-[10px]">
          <ActiveLink classname="" to="/Home">
            Home
          </ActiveLink>
          <ActiveLink classname="" to="/Blog">
            {" "}
            Blog
          </ActiveLink>

          {/* <Link to="/login">
            <button className="btn btn-primary mt-[-10px]">Login</button>
          </Link> */}

          {user && (
            <div
              className="user-hover"
              onMouseEnter={Enter}
              onMouseLeave={Leave}
            >
              {hover ? (
                user.email
              ) : (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}
            </div>
          )}

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
