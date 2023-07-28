import { Button, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import accFriend from "../Utlities/Friend/Accept";
import { useDispatch } from "react-redux";
import cancelRequest from "../Utlities/Friend/CancelRequest";
import blockPeople from "../Utlities/Friend/BlockPeople";
import ProfileImageComponents from "./ProfileImageComponents";

const FriendRequestMenuList = ({ arr }) => {
  const [BtnAccept, setBtnAccept] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);
  const [BtnBlock, setBtnBlock] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <List className=" w-full border-b-2  hover:bg-gray-100 cursor-pointer">
        <div>
          <ListItem>
            <ProfileImageComponents data={arr} />
            <ListItemText primary={arr.username} />
          </ListItem>
          <div className="flex flex-row justify-around ">
            <Button
              onClick={() => {
                accFriend(arr.userId, setBtnAccept, dispatch);
              }}
              sx={{ color: "#1e3a8a" }}
              disabled={BtnAccept}
            >
              Accept
            </Button>
            <Button
              onClick={() => {
                cancelRequest(arr.userId, setBtnCancel, dispatch);
              }}
              sx={{ color: "#1e3a8a" }}
              disabled={BtnCancel}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                blockPeople(arr.userId, dispatch, setBtnBlock);
              }}
              sx={{ color: "#ff0000" }}
              disabled={BtnBlock}
            >
              Block
            </Button>
          </div>
        </div>
      </List>
    </div>
  );
};

export default FriendRequestMenuList;
