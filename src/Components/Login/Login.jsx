import React from "react";
import { Link } from "react-router-dom";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";

const Login = () => {
  return (
    <div className="flex">
      <div className="form-container border-2 w-[400px] h-[400px] m-auto my-[100px]">
        <h2 className="text-center text-3xl font-bold my-10">Login</h2>
        <form className="text-center">
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

          <div className="mx-[50px]">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-black"
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div>
            <input
              className="bg-blue-300 h-[40px] w-[100px] rounded-lg mx-[100px] mt-[20px]"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p className="text-center mt-[20px] ">
          <small>
            New to SimplyRecipes? <Link to="/register">Create New Account</Link>
          </small>
        </p>
        <SocialLoginBtn />
      </div>
      <div className="col-md-6">
        <img
          className="w-100"
          src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
