import { MoreVert, Person } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
//import { useSelector } from "react-redux";

const FriendListBox = () => {
  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };

  const messageFriends = [
    "1",
    "2",
    "3",
    "1",
    "2",
    "3",
    "1",
    "2",
    "3",
    "1",
    "2",
    "3",
  ];

  //console.log(useSelector((state) => state.userDatas.friendsDatas));

  return (
    <Box
      className="w-[30vw] h-full border-r-2"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <div className="w-full  bg-blue-900 text-white px-2 pt-1 h-16 overflow-hidden">
        <div className="text-bold mb-2">Messages List</div>
        <h1 className="text-xs font-thin opacity-70">Total - 3</h1>
      </div>
      <div className="flex w-full justify-around">
        <div
          className={query === "friends" ? active : noActive}
          onClick={() => {
            change("friends");
          }}
        >
          Friends
        </div>
        <div
          className={query === "groups" ? active : noActive}
          onClick={() => {
            change("groups");
          }}
        >
          Groups
        </div>
      </div>
      <div className="w-full h-[calc(100%_-_94.48px)] lg:h-[calc(100%_-_97.47px)] ">
        <div
          className={`w-full h-full  ${
            query === "friends" ? "" : "hidden"
          } overflow-y-auto`}
        >
          {messageFriends.map((value, index) => {
            return (
              <div key={index} className=" border-b-2">
                <List>
                  <ListItem
                    secondaryAction={
                      <IconButton>
                        <MoreVert />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={
                          <div className="w-4 h-4 bg-green-400 rounded-full border-2" />
                        }
                      >
                        <Avatar className="border-2">
                          <Person />
                        </Avatar>
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Name"
                      secondary={
                        <span className="border-2 border-green-300 w-14 h-5 flex justify-center items-center rounded-md text-xs text-green-400">
                          <span>Online</span>
                        </span>
                      }
                    />
                  </ListItem>
                </List>
              </div>
            );
          })}
        </div>
        <div
          className={`w-full h-full bg-red-500 ${
            query === "groups" ? "" : "hidden"
          }`}
        >
          Groups
        </div>
      </div>
    </Box>
  );
};

export default FriendListBox;
