import {
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React from "react";

const ManageMenuBar = ({ open, setOpen, friendMenuRef }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Popper
        open={open}
        anchorEl={friendMenuRef.current}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ zIndex: "50" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left-top" : "left-bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      console.log("Click");
                    }}
                    sx={{ color: "blue" }}
                  >
                    Manage Members
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      console.log("Click");
                    }}
                    sx={{ color: "blue" }}
                  >
                    Manage Profile
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ManageMenuBar;
