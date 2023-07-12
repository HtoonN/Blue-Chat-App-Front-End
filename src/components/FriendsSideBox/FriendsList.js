import { AccountCircle } from "@mui/icons-material";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

const FriendsList = ({
  index,
  data,
  profileImage,
  selectedUser,
  setSelectedUser,
  selectFunction,
  dispatch,
}) => {
  return (
    <div className=" border-b-2">
      <ListItem
        className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
          index === selectedUser ? "bg-gray-300" : ""
        } `}
        onClick={() => {
          if (index !== selectedUser) {
            setSelectedUser(index);
          }
          selectFunction(data.userId, dispatch, index);
        }}
      >
        <ListItemAvatar>
          <Avatar>
            {data.profileImage ? (
              <img
                src={`http://localhost:3001/api/v1/account/user/get_image/${profileImage.public_id}/${profileImage.version}/${profileImage.format}/${profileImage.resource_type}`}
              />
            ) : (
              <AccountCircle className="text-blue-900" />
            )}
          </Avatar>
        </ListItemAvatar>
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
