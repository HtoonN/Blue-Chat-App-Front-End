import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useDispatch } from "react-redux";
import callFunForConformationDialog from "../../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";
import {
  setGroupProfileModel,
  setManageGroupMembersModel,
  setSeeGroupMemberModel,
} from "../../Redux/Reducer/OpenCloseReducer";

export default function GroupMenuBox({
  open,
  setOpen,
  anchorRef,
  isOwner,
  data,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <Popper
      sx={{ zIndex: "100" }}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper sx={{ backgrounColor: "red" }}>
            <ClickAwayListener onClickAway={handleClose}>
              {isOwner ? (
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      dispatch(setManageGroupMembersModel());
                    }}
                  >
                    Mange Members
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      dispatch(setGroupProfileModel());
                    }}
                  >
                    Edit Group
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      callFunForConformationDialog(handleClose, dispatch, {
                        header: "Delete Group",
                        body: "You can't restore group again!",
                        funName: "deleteGroup",
                        data: data.groupId,
                      });
                    }}
                  >
                    <div className="text-red-500">Delete</div>
                  </MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      dispatch(setSeeGroupMemberModel());
                      handleClose();
                    }}
                  >
                    <div className="text-blue-900">Members</div>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      callFunForConformationDialog(handleClose, dispatch, {
                        header: "Leave",
                        body: "You can add again",
                        funName: "leaveGroup",
                        data: data.groupId,
                      });
                    }}
                  >
                    <div className="text-red-500">Leave Group</div>
                  </MenuItem>
                </MenuList>
              )}
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
