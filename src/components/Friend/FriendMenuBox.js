import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useDispatch } from "react-redux";
import callFunForConformationDialog from "../../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";

export default function FriendMenuBox({ open, setOpen, anchorRef, data }) {
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
      sx={{ zIndex: "100" }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "left bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
              >
                <MenuItem
                  onClick={() => {
                    callFunForConformationDialog(handleClose, dispatch, {
                      header: "UnFriend",
                      body: "Are you sure to UNFIREND with this user!",
                      funName: "unfriend",
                      data: data.userId,
                    });
                  }}
                >
                  UnFriend
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    callFunForConformationDialog(handleClose, dispatch, {
                      header: "Block",
                      body: "Are you sure to block the user!",
                      funName: "blockUser",
                      data: data.userId,
                    });
                  }}
                >
                  <div className="text-red-500">Block</div>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    callFunForConformationDialog(handleClose, dispatch, {
                      header: "Delete Chats",
                      body: "Are you sure to delete chat with this user!",
                      funName: "deleteChat",
                      data: data.userId,
                    });
                  }}
                >
                  <div className="text-red-500">Delete Chat</div>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
