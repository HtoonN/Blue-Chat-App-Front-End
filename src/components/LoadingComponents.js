import React from "react";
import Logo from "../Images/logo.png";
import LoadingCircle from "./LoadingCircle";

const LoadingComponents = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center">
      <div>
        <img
          src={Logo}
          alt="logo"
          className="w-28 h-28 animate-heartBeat lg:h-48 lg:w-48"
        />
      </div>

      <LoadingCircle />
    </div>
  );
};

export default LoadingComponents;
