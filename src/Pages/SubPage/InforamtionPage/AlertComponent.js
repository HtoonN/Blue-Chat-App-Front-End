import { Alert, AlertTitle, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const AlertComponent = ({ selectFun }) => {
  const open = useSelector((state) => state.alert.value);
  const text = useSelector((state) => state.alert.text);
  const header = useSelector((state) => state.alert.header);

  return (
    <Alert
      severity="success"
      variant="filled"
      className="z-[100] fixed top-2 left-[50%] -translate-x-[50%] w-[90%] md:w-[35%]"
      sx={{
        translate: `${open ? "0 0" : "0 -200%"}`,
        transition: "ease-in-out",
        transitionDuration: "1s",
      }}
      onClick={() => {
        if (selectFun) {
          selectFun();
        }
      }}
    >
      <AlertTitle>{header}</AlertTitle>
      {text ? (
        <Typography sx={{ fontSize: "13px", opacity: "0.6" }}>
          {text}
        </Typography>
      ) : (
        <></>
      )}
    </Alert>
  );
};

export default AlertComponent;
