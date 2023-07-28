import { IconButton, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import ProfileImageComponents from "../ProfileImageComponents";
import { Add } from "@mui/icons-material";
import addGroupMemberByAdmin from "../../Utlities/AddGroupMemberByAdmin";
import { useDispatch } from "react-redux";

const GroupAddListItem = ({ data, groupId }) => {
  const [BtnDisabled, setBtnDisabled] = useState(false);
  const dispatch = useDispatch();

  return (
    <ListItem className="mb-1 py-3 hover:bg-gray-200">
      <ProfileImageComponents data={data} />
      <ListItemText primary={data.username} />
      <IconButton
        onClick={() => {
          addGroupMemberByAdmin(data, groupId, setBtnDisabled, dispatch);
        }}
        disabled={BtnDisabled}
      >
        <Add className="text-blue-900" />
      </IconButton>
    </ListItem>
  );
};

export default GroupAddListItem;
