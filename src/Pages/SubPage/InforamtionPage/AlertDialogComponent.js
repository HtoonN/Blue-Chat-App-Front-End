import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertDialogUnseen } from "../../../Redux/Reducer/AlertDialogReducer";

const AlertDialogComponent = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.alertDialog.seen);
  const title = useSelector((state) => state.alertDialog.header);
  const contentText = useSelector((state) => state.alertDialog.body);

  const style = "w-[300px] md:w-96 ";

  const handleClose = () => {
    dispatch(setAlertDialogUnseen());
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={style}>{title}</DialogTitle>
        <DialogContent className={style}>
          <DialogContentText>{contentText}</DialogContentText>
        </DialogContent>
        <DialogActions className={style}>
          <Button onClick={handleClose}>
            <span className="text-blue-900">Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogComponent;
