import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const AlertComponent = () => {
  const open = useSelector((state) => state.alert.value);

  const seenClass =
    "z-50  fixed top-[5px] left-[50%] -translate-x-[50%] w-[90%] transition-all duration-1000 ease-in-out md:w-[70%] ";
  const unseenClass =
    "z-50  fixed top-[0] left-[50%] -translate-x-[50%] w-[90%] transition-all duration-1000 ease-in-out -translate-y-[120%] md:w-[70%] ";

  return (
    <div>
      <div className={open ? seenClass : unseenClass}>
        <Alert severity="success" variant="filled">
          <AlertTitle>Success</AlertTitle>
          {useSelector((state) => state.alert.text)}
        </Alert>
      </div>
    </div>
  );
};

export default AlertComponent;
