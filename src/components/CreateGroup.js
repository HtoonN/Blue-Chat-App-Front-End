import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LabelAndInputText from "./LabelAndInputText";
import { useDispatch, useSelector } from "react-redux";
import { setCreateGroupModel } from "../Redux/Reducer/OpenCloseReducer";
import createGroupFun from "../Utlities/Group/CreateGroup";

export default function CreateGroup() {
  const open = useSelector((state) => state.openClose.createGroupModel);
  const [groupName, setGroupName] = React.useState("");
  const [groupType, setGroupType] = React.useState("General");
  const [BtnCreate, setBtnCreate] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setCreateGroupModel());
  };

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {open ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="text-blue-900">
            {activeLanguage.createGroup.title}
          </DialogTitle>
          <DialogContent>
            <LabelAndInputText
              name={activeLanguage.createGroup.name}
              value={groupName}
              setValue={setGroupName}
            />
            <LabelAndInputText
              name={activeLanguage.createGroup.type}
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
              {activeLanguage.createGroup.cancelbutton}
            </Button>
            <Button
              onClick={() => {
                setGroupType("General");
                if (groupName && groupType) {
                  createGroupFun({
                    groupName,
                    groupType,
                    handleClose,
                    dispatch,
                    setBtnCreate,
                    setGroupName,
                  });
                }
              }}
              sx={{ color: "#0d47a1" }}
              disabled={BtnCreate}
            >
              {activeLanguage.createGroup.creategroupbutton}
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
}
