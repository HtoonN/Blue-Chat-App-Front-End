import { Alert, AlertTitle, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const AlertComponent = () => {
  const open = useSelector((state) => state.alert.value);
  const text = useSelector((state) => state.alert.text);

  return (
    <Alert
      severity="success"
      variant="filled"
      className="z-[100] fixed top-2 left-[50%] -translate-x-[50%] w-[90%] md:w-[50%]"
      sx={{
        translate: `${open ? "0 0" : "0 -200%"}`,
        transition: "ease-in-out",
        transitionDuration: "1s",
      }}
    >
      <AlertTitle>Success!</AlertTitle>
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
