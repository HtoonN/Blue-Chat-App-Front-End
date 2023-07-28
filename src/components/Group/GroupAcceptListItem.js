import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import ProfileImageComponents from "../ProfileImageComponents";
import acceptGroupMember from "../../Utlities/Group/AcceptGroupMember";
import { useDispatch, useSelector } from "react-redux";

const GroupAcceptListItem = ({ data }) => {
  const [BtnAccept, setBtnAccept] = useState(false);

  const groupId = useSelector((state) => state.userDatas.selectedUser.id);

  const dispatch = useDispatch();
  return (
    <ListItem className="mb-2">
      <ProfileImageComponents data={data} />
      <ListItemText primary={data.username} />
      <ListItemIcon>
        <Button
          sx={{ color: "#0d47a1" }}
          onClick={() => {
            acceptGroupMember(data, groupId, dispatch, setBtnAccept);
          }}
          disabled={BtnAccept}
        >
          Accept
        </Button>
        <Button sx={{ color: "#e91e63" }}>Reject</Button>
      </ListItemIcon>
    </ListItem>
  );
};

export default GroupAcceptListItem;
