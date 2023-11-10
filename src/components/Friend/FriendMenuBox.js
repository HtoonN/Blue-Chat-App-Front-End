import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useDispatch, useSelector } from "react-redux";
import callFunForConformationDialog from "../../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";

export default function FriendMenuBox({ open, setOpen, anchorRef, data }) {
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

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
                      header:
                        activeLanguage.friendmenuboxandFribaritem.unfriend
                          .header,
                      body: activeLanguage.friendmenuboxandFribaritem.unfriend
                        .body,
                      funName: "unfriend",
                      data: data.userId,
                    });
                  }}
                >
                  {activeLanguage.friendMenuBox.unfriend}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    callFunForConformationDialog(handleClose, dispatch, {
                      header:
                        activeLanguage.friendmenuboxandFribaritem.block.header,
                      body: activeLanguage.friendmenuboxandFribaritem.block
                        .body,
                      funName: "blockUser",
                      data: data.userId,
                    });
                  }}
                >
                  <div className="text-red-500">
                    {activeLanguage.friendMenuBox.block}
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    callFunForConformationDialog(handleClose, dispatch, {
                      header:
                        activeLanguage.friendmenuboxandFribaritem.deletechat
                          .header,
                      body: activeLanguage.friendmenuboxandFribaritem.deletechat
                        .body,
                      funName: "deleteChat",
                      data: data.userId,
                    });
                  }}
                >
                  <div className="text-red-500">
                    {activeLanguage.friendMenuBox.deletechat}
                  </div>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
