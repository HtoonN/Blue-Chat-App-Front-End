import { RemoveCircle } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import ProfileImageComponents from "../ProfileImageComponents";
import removeFromGroup from "../../Utlities/Group/RemoveFromGroup";
import { useDispatch, useSelector } from "react-redux";

const GroupMemberListItem = ({ data, isAdmin }) => {
  const groupId = useSelector((state) => state.userDatas.selectedUser.id);
  const dispatch = useDispatch();

  const [BtnRemove, setBtnRemove] = useState(false);
  return (
    <ListItem>
      <ProfileImageComponents data={data} />
      <ListItemText
        primary={data.username}
        secondary={isAdmin ? "Admin" : "Member"}
      />

      {!isAdmin && (
        <IconButton
          onClick={() => {
            removeFromGroup(groupId, data.userId, dispatch, setBtnRemove);
          }}
          disabled={BtnRemove}
        >
          <RemoveCircle className="text-red-500 " />
        </IconButton>
      )}
    </ListItem>
  );
};

export default GroupMemberListItem;
