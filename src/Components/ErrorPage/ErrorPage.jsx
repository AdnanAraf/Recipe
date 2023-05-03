import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="text-5xl text-center items-center justify-center mt-48 text-purple-400 font-bold">
      <p className="">Sorry Bro!</p>
      <p>You clicked wrong one</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
