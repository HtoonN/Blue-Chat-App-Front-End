import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import LabelAndInputPassword from "./LabelAndInputPassword";
import changePassword from "../Utlities/ChangePassword";
import { useDispatch } from "react-redux";

const ChangePassword = ({ open, setOpen }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [btnChangePassword, setBtnChangePassword] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle className="w-[350px] text-blue-900">
        Change Password
      </DialogTitle>
      <div className="flex flex-col items-center justify-center h-500">
        <LabelAndInputPassword
          name="Old Password"
          value={oldPassword}
          setValue={setOldPassword}
        />
        <LabelAndInputPassword
          name="New Password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <LabelAndInputPassword
          name="Re-New Password"
          value={reNewPassword}
          setValue={setReNewPassword}
        />
      </div>
      <DialogActions>
        <Button
          sx={{ color: "#0d47a1" }}
          onClick={() => {
            handleClose();
            setOldPassword("");
            setNewPassword("");
            setReNewPassword("");
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{ color: "#0d47a1" }}
          onClick={() => {
            changePassword({
              oldPassword,
              newPassword,
              reNewPassword,
              dispatch,
              handleClose,
              setBtnChangePassword,
              setOldPassword,
              setNewPassword,
              setReNewPassword,
            });
          }}
          disabled={btnChangePassword}
        >
          Change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePassword;
