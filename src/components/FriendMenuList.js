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

const FriendMenuList = ({ arr, isFri, profileimage }) => {
  const [BtnUnfriend, setBtnUnfriend] = useState(false);
  const [BtnAdd, setBtnAdd] = useState(false);
  const [BtnBlock, setBtnBlock] = useState(false);

  return (
    <div>
      <List className=" w-full border-b-2 ">
        <div>
          <ListItem
            secondaryAction={
              <div className="hidden md:block">
                {isFri ? (
                  <Button
                    onClick={() => {
                      unFriend(arr.userId, setBtnUnfriend);
                    }}
                    sx={{ color: "#1e3a8a" }}
                    disabled={BtnUnfriend}
                  >
                    UnFriend
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      addPeople(arr.userId, setBtnAdd);
                    }}
                    sx={{ color: "#1e3a8a" }}
                    disabled={BtnAdd}
                  >
                    Add
                  </Button>
                )}
                <Button
                  onClick={() => {
                    blockPeople(arr.userId, setBtnBlock);
                  }}
                  sx={{ color: "#1e3a8a" }}
                  disabled={BtnBlock}
                >
                  Block
                </Button>
              </div>
            }
          >
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
          <div className="flex flex-row justify-around md:hidden ">
            {isFri ? (
              <Button
                onClick={() => {
                  unFriend(arr.userId, setBtnUnfriend);
                }}
                sx={{ color: "#1e3a8a" }}
                disabled={BtnUnfriend}
              >
                UnFriend
              </Button>
            ) : (
              <Button
                onClick={() => {
                  addPeople(arr.userId, setBtnAdd);
                }}
                sx={{ color: "#1e3a8a" }}
                disabled={BtnAdd}
              >
                Add
              </Button>
            )}
            <Button
              onClick={() => {
                blockPeople(arr.userId, setBtnBlock);
              }}
              sx={{ color: "#1e3a8a" }}
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
