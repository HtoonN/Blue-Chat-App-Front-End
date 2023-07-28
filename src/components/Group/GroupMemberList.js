import { List } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGroupMembersData from "../../Utlities/Group/getGroupMembersData";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import GroupMemberListItem from "./GroupMemberListItem";

const GroupMemberList = () => {
  const groupDatas = useSelector((state) => state.userDatas.chatFriend.data);
  const selectedUser = useSelector((state) => state.userDatas.selectedUser);
  const groupMembersList = useSelector(
    (state) => state.userDatas.groupMembersList.members
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser.status === "group") {
      getGroupMembersData(groupDatas.members, dispatch);
    }
  }, [selectedUser]);

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
              <GroupMemberListItem data={data} isAdmin={isAdmin} key={index} />
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
