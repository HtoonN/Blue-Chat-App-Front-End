import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import changeImageStringToObj from "../../Utlities/ChangeImageStringToObj";
import blockPeople from "../../Utlities/Friend/BlockPeople";
import cancelAddFriend from "../../Utlities/Friend/CancelAddFriend";

const AddedListItems = ({ obj }) => {
  const [Btnblock, setBtnblock] = useState(false);
  const [BtnCancel, setBtnCancel] = useState(false);

  const dispatch = useDispatch();
  const data = {
    userId: obj.userId,
    username: obj.username,
    profileImage: obj.profileImage,
  };

  if (data.profileImage) {
    data.profileImage = changeImageStringToObj(data.profileImage);
  }

  return (
    <ListItem
      className="border-b-2"
      secondaryAction={
        <>
          <Button
            onClick={() => cancelAddFriend(data.userId, setBtnCancel, dispatch)}
            disabled={BtnCancel}
            sx={{ color: "#1e3a8a" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => blockPeople(data.userId, dispatch, setBtnblock)}
            disabled={Btnblock}
            sx={{ color: "#ff0000" }}
          >
            Block
          </Button>
        </>
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
      <ListItemText primary={data.username} secondary="Person" />
    </ListItem>
  );
};

export default AddedListItems;
