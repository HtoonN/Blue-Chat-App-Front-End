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
import addPeople from "../Utlities/Friend/AddPeople";
import blockPeople from "../Utlities/Friend/BlockPeople";
import unFriend from "../Utlities/Friend/Unfriend";
import cancelAddFriend from "../Utlities/Friend/CancelAddFriend";
import { useDispatch } from "react-redux";
import accFriend from "../Utlities/Friend/Accept";
import cancelRequest from "../Utlities/Friend/CancelRequest";

const FriendMenuList = ({ arr, isFri, isRequested, isAdded, profileimage }) => {
  const [BtnUnfriend, setBtnUnfriend] = useState(false);
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnBlock, setBtnBlock] = useState(false);
  const [BtncancelAddFriend, setBtnCancelAddFriend] = useState(false);
  const [BtnAccept, setBtnAccept] = useState(false);
  const [BtnCancelRequested, setBtnCancelRequested] = useState(false);

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
                    src={`http://localhost:3001/api/v1/account/user/get_image/${profileimage.public_id}/${profileimage.version}/${profileimage.format}/${profileimage.resource_type}`}
                  />
                ) : (
                  <AccountCircle className="text-blue-900" />
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={arr.username} secondary="Person" />
          </ListItem>
          <div className="flex flex-row justify-around">
            {isFri ? (
              <Button
                onClick={() => {
                  unFriend(arr.userId, setBtnUnfriend, dispatch);
                }}
                sx={{ color: "#1e3a8a" }}
                disabled={BtnUnfriend}
              >
                UnFriend
              </Button>
            ) : isAdded ? (
              <Button
                onClick={() => {
                  cancelAddFriend(arr.userId, setBtnCancelAddFriend, dispatch);
                }}
                sx={{ color: "#1e3a8a" }}
                disabled={BtncancelAddFriend}
              >
                Cancel Request
              </Button>
            ) : isRequested ? (
              <>
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
                    cancelRequest(arr.userId, setBtnCancelRequested, dispatch);
                  }}
                  sx={{ color: "#1e3a8a" }}
                  disabled={BtnCancelRequested}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={() => {
                  addPeople(arr.userId, setBtnAdd, dispatch);
                }}
                sx={{ color: "#1e3a8a" }}
                disabled={BtnAdd}
              >
                Add
              </Button>
            )}
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

export default FriendMenuList;
