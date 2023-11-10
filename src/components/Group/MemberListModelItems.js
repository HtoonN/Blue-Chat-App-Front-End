import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import ProfileImageComponents from "../ProfileImageComponents";

const MemberListModelItem = ({ data, isAdmin, activeLanguage }) => {
  return (
    <ListItem className="mb-1  hover:bg-gray-50">
      <ProfileImageComponents data={data} />
      <ListItemText
        primary={data.username}
        secondary={
          isAdmin
            ? activeLanguage.memberList.admin
            : activeLanguage.memberList.member
        }
      />
    </ListItem>
  );
};

export default MemberListModelItem;
