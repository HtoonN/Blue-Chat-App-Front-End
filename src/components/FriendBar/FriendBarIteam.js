import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import unFriend from "../../Utlities/Friend/Unfriend";
import blockPeople from "../../Utlities/Friend/BlockPeople";
import messageControl from "../../Utlities/MessageControl";
import startMessageControl from "../../Utlities/StartMessageControl";

const FriendBarIteam = ({ arr, profileimage }) => {
  const messagedList = useSelector(
    (state) => state.userDatas.friendsDatas.messagedFriends.friendsList
  );
  const friendMenuRef = useRef();
  const [open, setOpen] = useState(false);
  let isMessaged = false;
  const [BtnBlock, setBtnBlock] = useState(false);
  const [BtnMessage, setBtnMessage] = useState(false);
  const [BtnStartMessage, setBtnStartMessage] = useState(false);
  const [BtnUnfriend, setBtnUnfriend] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  messagedList.map((data) => {
    console.log("Check");
    if (data === arr.userId) {
      isMessaged = true;
    }
  });

  return (
    <div className="flex-none w-[120px] h-full mr-1 flex flex-col items-center justify-center overflow-hidden ">
      <IconButton onClick={() => setOpen(true)} ref={friendMenuRef}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            arr.status && (
              <div className="w-4 h-4 bg-green-400 rounded-full border-2" />
            )
          }
        >
          <Avatar>
            {arr.profileImage ? (
              <img
                src={`http://localhost:3001/api/v1/account/user/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
              />
            ) : (
              <AccountCircle className="text-blue-900" />
            )}
          </Avatar>
        </Badge>
      </IconButton>
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
                  <div>
                    {isMessaged ? (
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          messageControl(arr.userId, dispatch, setBtnMessage);
                        }}
                        sx={{ color: "blue" }}
                        disabled={BtnMessage}
                      >
                        Message
                      </MenuItem>
                    ) : (
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          startMessageControl(
                            arr.userId,
                            dispatch,
                            setBtnStartMessage
                          );
                        }}
                        sx={{ color: "blue" }}
                        disabled={BtnStartMessage}
                      >
                        Start Message
                      </MenuItem>
                    )}
                  </div>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      unFriend(arr.userId, setBtnUnfriend, dispatch);
                    }}
                    sx={{ color: "blue" }}
                    disabled={BtnUnfriend}
                  >
                    Unfriend
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      blockPeople(arr.userId, dispatch, setBtnBlock);
                    }}
                    sx={{ color: "red" }}
                    disabled={BtnBlock}
                  >
                    Block
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      <Typography sx={{ height: "25%" }}>{arr.username}</Typography>
    </div>
  );
};

export default FriendBarIteam;
