import React, { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLoginBtn = () => {
  const [user, setUser] = useState({});
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setloading(true);
        setUser(user);
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        seterror("You didnot signup Please Register again");
      });
  };
  return (
    <div>
      <div className=" social-button-container w-50 mt-[100px] mx-[100px]">
        <div className="">
          <img
            onClick={handleGoogleLogin}
            className=" social-button"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
          <p className=" text-red-400 font-bold text-center">{error}</p>
        </div>
        <div className="">
          <img
            onClick={handleGithubLogin}
            className=" social-button"
            src="https://i.ibb.co/g9f4P0S/github-btn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLoginBtn;
