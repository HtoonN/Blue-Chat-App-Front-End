import { AccountCircle } from "@mui/icons-material";
import { Avatar, ListItemAvatar } from "@mui/material";
import React from "react";

const ProfileImageComponents = ({ data, profileImage }) => {
  return (
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
  );
};

export default ProfileImageComponents;
