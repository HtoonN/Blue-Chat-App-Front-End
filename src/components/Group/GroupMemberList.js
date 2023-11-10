import { List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import GroupMemberListItem from "./GroupMemberListItem";

const GroupMemberList = ({ activeLanguage }) => {
  const groupDatas = useSelector((state) => state.userDatas.chatFriend.data);
  const groupMembersList = useSelector(
    (state) => state.userDatas.groupMembersList.members
  );

  return (
    <div className="w-full h-full">
      {groupMembersList.length ? (
        <List className="w-full h-full overflow-y-scroll">
          {groupMembersList.map((data, index) => {
            let isAdmin = false;
            if (data.userId === groupDatas.admin[0].id) {
              isAdmin = true;
            }
            return (
              <GroupMemberListItem
                data={data}
                isAdmin={isAdmin}
                key={index}
                activeLanguage={activeLanguage}
              />
            );
          })}
        </List>
      ) : (
        <EmptyMessagedComponent message="Members List" />
      )}
    </div>
  );
};

export default GroupMemberList;
