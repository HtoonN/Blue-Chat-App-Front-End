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
import startMessageControl from "../../Utlities/StartMessageControl";
import selectFunction from "../../Utlities/SelectedFunction";
import clearNotiFun from "../../Utlities/ClearNotiFun";
import callFunForConformationDialog from "../../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";

const FriendBarIteam = ({ arr, profileimage }) => {
  const messagedList = useSelector(
    (state) => state.userDatas.friendsDatas.messagedFriends.friendsList
  );
  const friendMenuRef = useRef();
  const [open, setOpen] = useState(false);
  let isMessaged = false;

  const [BtnStartMessage, setBtnStartMessage] = useState(false);

  const dispatch = useDispatch();

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const handleClose = () => {
    setOpen(false);
  };

  messagedList.map((data) => {
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
                src={`${process.env.REACT_APP_API_A}/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
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
                          selectFunction(arr.userId, "friend", dispatch, arr);
                          clearNotiFun(arr.userId, dispatch);
                        }}
                        sx={{ color: "blue" }}
                      >
                        {activeLanguage.friendbarMenu.chatfriend}
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
                          selectFunction(arr.userId, "friend", dispatch, arr);
                        }}
                        sx={{ color: "blue" }}
                        disabled={BtnStartMessage}
                      >
                        {activeLanguage.friendbarMenu.startmessage}
                      </MenuItem>
                    )}
                  </div>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      //unFriend(arr.userId, setBtnUnfriend, dispatch);
                      callFunForConformationDialog(handleClose, dispatch, {
                        header:
                          activeLanguage.friendmenuboxandFribaritem.unfriend
                            .header,
                        body: activeLanguage.friendmenuboxandFribaritem.unfriend
                          .body,
                        funName: "unfriend",
                        data: arr.userId,
                      });
                    }}
                    sx={{ color: "blue" }}
                  >
                    {activeLanguage.friendbarMenu.unfriend}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      //blockPeople(arr.userId, dispatch, setBtnBlock);
                      callFunForConformationDialog(handleClose, dispatch, {
                        header:
                          activeLanguage.friendmenuboxandFribaritem.block
                            .header,
                        body: activeLanguage.friendmenuboxandFribaritem.block
                          .body,
                        funName: "blockUser",
                        data: arr.userId,
                      });
                    }}
                    sx={{ color: "red" }}
                  >
                    {activeLanguage.friendbarMenu.block}
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
