import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import LabelAndInputPassword from "./LabelAndInputPassword";
import changePassword from "../Utlities/ChangePassword";
import { useDispatch, useSelector } from "react-redux";

const ChangePassword = ({ open, setOpen }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [btnChangePassword, setBtnChangePassword] = useState(false);
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle className="w-[350px] text-blue-900">
        {activeLanguage.profile.changePassword.title}
      </DialogTitle>
      <div className="flex flex-col items-center justify-center h-500">
        <LabelAndInputPassword
          name={activeLanguage.profile.changePassword.oldpassword}
          value={oldPassword}
          setValue={setOldPassword}
        />
        <LabelAndInputPassword
          name={activeLanguage.profile.changePassword.newpassword}
          value={newPassword}
          setValue={setNewPassword}
        />
        <LabelAndInputPassword
          name={activeLanguage.profile.changePassword.renewpassword}
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
          {activeLanguage.profile.changePassword.btn.cancel}
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
              activeLanguage,
            });
          }}
          disabled={btnChangePassword}
        >
          {activeLanguage.profile.changePassword.btn.changepassword}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePassword;
