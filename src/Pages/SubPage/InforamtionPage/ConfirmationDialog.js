import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCD } from "../../../Redux/Reducer/ConfirmationDialog";
import conformationFunctions from "../../../Utlities/ConformationDialogFunfciton/ConformaitonFunction";

export default function ConfirmationDialog() {
  const open = useSelector((state) => state.confDialog.open);
  const header = useSelector((state) => state.confDialog.header);
  const body = useSelector((state) => state.confDialog.body);
  const data = useSelector((state) => state.confDialog.data);
  const funName = useSelector((state) => state.confDialog.acceptFun);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpenCD());
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="text-blue-900">
          {header}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ width: "400px" }}
          >
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#0d47a1" }}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              conformationFunctions[funName](dispatch, data);
            }}
            sx={{ color: "#0d47a1" }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
