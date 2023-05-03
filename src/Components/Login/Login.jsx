import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { AuthContext } from "../../Provider/AuthProvider";
import { RotatingTriangles } from "react-loader-spinner";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();
  <RotatingTriangles colors={["#8C5E58", "#2B061E", "#361134"]} />;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [error, seterror] = useState("");
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset;
        navigate(from, { replace: true });
        // console.log(loggedUser);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        seterror("Password or Email Didnot Match");
      });
  };
  return (
    <div className="flex">
      <div className="form-container border-2 w-[400px] h-[400px] m-auto my-[100px]">
        <h2 className="text-center text-3xl font-bold my-10">Login</h2>
        <form onSubmit={handleLogin} className="text-center">
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
            <button className="btn btn-info w-[300px] p-2 mt-3">Login</button>
          </div>
        </form>
        <p className="text-center mt-[20px] ">
          <small>
            New to SimplyRecipes? <Link to="/register">Create New Account</Link>
          </small>
        </p>
        <p className=" text-red-400 font-bold text-center">{error}</p>
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
