import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetPasswordForAccountDeactivation } from "../Redux/Reducer/OpenCloseReducer";
import LabelAndInputPassword from "./LabelAndInputPassword";
import accountDeactivationFun from "../Utlities/AccountDeactivationFunction";

const GetPasswordForAccountDeactivation = () => {
  const open = useSelector(
    (state) => state.openClose.getPasswordForAccountDeactivation
  );
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleClose = () => {
    dispatch(setGetPasswordForAccountDeactivation());
  };

  const cancelFunciton = () => {
    handleClose();
  };

  const deactivateFunction = () => {
    //handleClose();
    if (password) {
      accountDeactivationFun(dispatch, password, setBtnDisabled);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ color: "#0d47a1" }}>Deactivate account</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ marginBottom: "15px" }}>
          Enter password to deactivate account.
        </DialogContentText>
        <LabelAndInputPassword
          name="Password"
          value={password}
          setValue={setPassword}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelFunciton} sx={{ color: "#0d47a1" }}>
          Cancel
        </Button>
        <Button
          onClick={deactivateFunction}
          sx={{ color: "red" }}
          disabled={btnDisabled}
        >
          Deactivate Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GetPasswordForAccountDeactivation;
