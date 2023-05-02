import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex ">
      <div className="form-container border-2 w-[400px] h-[500px] m-auto my-[50px] mx-[200px]">
        <h2 className="text-center text-3xl font-bold my-10">Sign Up</h2>
        <form className="text-center">
          <div className="mx-[50px] m-[20px]">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="border-2 border-black"
              type="text"
              name="name"
              id=""
              required
            />
          </div>

          <div className="mx-[50px] m-[20px]">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-black"
              type="email"
              name="email"
              id=""
              required
            />
          </div>

          <div className="mx-[50px] m-[20px]">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-black"
              type="password"
              name="password"
              required
            />
          </div>

          <div className="mx-[50px]">
            <label className="block" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              className="border-2 border-black"
              type="password"
              name="confirm"
              required
            />
          </div>
          <div>
            <input
              className="bg-blue-300 h-[40px] w-[300px] rounded-lg  mt-[20px]"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <p className="text-center mt-[20px] ">
          <small>
            New to Simply Recipes?{" "}
            <Link to="/login">Already Have an Account</Link>
          </small>
        </p>
        {/* <p className=" text-red-400 font-bold text-center">{error}</p> */}
      </div>
      <div className="col-md-6">
        <img
          className="w-100"
          src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;
