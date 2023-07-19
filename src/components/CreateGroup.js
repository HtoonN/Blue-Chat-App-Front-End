import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LabelAndInputText from "./LabelAndInputText";
import { useDispatch, useSelector } from "react-redux";
import { setCreateGroupModel } from "../Redux/Reducer/OpenCloseReducer";

export default function CreateGroup() {
  const open = useSelector((state) => state.openClose.createGroupModel);
  const [groupName, setGroupName] = React.useState("");
  const [groupType, setGroupType] = React.useState("General");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCreateGroupModel());
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-blue-900">Create Group</DialogTitle>
        <DialogContent>
          <LabelAndInputText
            name="Group Name"
            value={groupName}
            setValue={setGroupName}
          />
          <LabelAndInputText
            name="Group Type"
            value={groupType}
            setValue={setGroupType}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleClose();
              setGroupName("");
              setGroupType("General");
            }}
            sx={{ color: "#0d47a1" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose();
              setGroupName("");
              setGroupType("General");
              console.log(groupName, groupType);
            }}
            sx={{ color: "#0d47a1" }}
          >
            Create Group
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
