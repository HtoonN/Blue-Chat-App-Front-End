import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import ProfileImageComponents from "../ProfileImageComponents";

const FriendsList = ({
  index,
  data,
  profileImage,
  selectedUser,
  selectFunction,
  dispatch,
}) => {
  return (
    <div className=" border-b-2">
      <ListItem
        className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
          data.userId === selectedUser ? "bg-gray-300" : ""
        } `}
        onClick={() => {
          if (data.userId !== selectedUser) {
            selectFunction(data.userId, dispatch, data.userId);
          }
        }}
      >
        <ProfileImageComponents data={data} profileImage={profileImage} />
        <ListItemText
          primary={data.username}
          secondary={
            data.status ? (
              <span
                className=" bg-green-400 w-14 h-5 flex justify-center items-center rounded-md 
          text-xs text-white"
              >
                <span>Online</span>
              </span>
            ) : (
              <span
                className=" bg-yellow-400 w-14 h-5 flex justify-center items-center rounded-md 
          text-xs text-white"
              >
                <span>Offline</span>
              </span>
            )
          }
        />
      </ListItem>
    </div>
  );
};

export default FriendsList;
