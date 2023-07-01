import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import accFriend from "../Utlities/Friend/Accept";
import { useDispatch } from "react-redux";
import cancelRequest from "../Utlities/Friend/CancelRequest";
import blockPeople from "../Utlities/Friend/BlockPeople";

const FriendRequestMenuList = ({ arr }) => {
  const [BtnAccept, setBtnAccept] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);
  const [BtnBlock, setBtnBlock] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <List className=" w-full border-b-2 ">
        <div>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                {arr.profileImage ? (
                  <img
                    src={`http://localhost:3001/api/v1/account/user/get_image/${arr.profileImage.public_id}/${arr.profileImage.version}/${arr.profileImage.format}/${arr.profileImage.resource_type}`}
                  />
                ) : (
                  <AccountCircle className="text-blue-900" />
                )}
              </Avatar>
            </ListItemAvatar>
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
                blockPeople(arr.userId, setBtnBlock, dispatch);
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
