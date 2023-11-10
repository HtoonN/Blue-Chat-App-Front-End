import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import unBlock from "../../Utlities/Friend/UnBlock";
import { useDispatch, useSelector } from "react-redux";
import changeImageStringToObj from "../../Utlities/ChangeImageStringToObj";

const BlockListItems = ({ obj }) => {
  const [BtnUnblock, setBtnUnblock] = useState(false);
  const dispatch = useDispatch();
  const data = {
    userId: obj.userId,
    username: obj.username,
    profileImage: obj.profileImage,
  };

  if (data.profileImage) {
    data.profileImage = changeImageStringToObj(data.profileImage);
  }

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <ListItem
      className="border-b-2  hover:bg-gray-100 cursor-pointer"
      secondaryAction={
        <Button
          onClick={() => unBlock(data.userId, dispatch, setBtnUnblock)}
          disabled={BtnUnblock}
          sx={{ color: "#ff0000" }}
        >
          {activeLanguage.blockList.cancel}
        </Button>
      }
    >
      <ListItemAvatar>
        <Avatar>
          {data.profileImage ? (
            <img
              src={`http://localhost:3001/api/v1/account/user/get_image/${data.profileImage.public_id}/${data.profileImage.version}/${data.profileImage.format}/${data.profileImage.resource_type}`}
            />
          ) : (
            <AccountCircle className="text-blue-900" />
          )}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={data.username}
        secondary={activeLanguage.blockList.person}
      />
    </ListItem>
  );
};

export default BlockListItems;
