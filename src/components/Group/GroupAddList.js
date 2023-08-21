import { List } from "@mui/material";
import React, { useEffect } from "react";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import { useDispatch, useSelector } from "react-redux";
import GroupAddListItem from "./GroupAddListItem";
import removeMembersFromFriends from "../../Utlities/RemoveMemberFromFriendsList";

const GroupAddList = () => {
  const friendList = useSelector((state) => state.userDatas.friendsList.list);
  const groupDatas = useSelector((state) => state.userDatas.chatFriend);
  const friendNoMemberList = useSelector(
    (state) => state.userDatas.groupMembersList.add
  );
  const dispatch = useDispatch();

  const groupId = groupDatas.data.groupId;
  const members = groupDatas.data.members.memberList;
  const accepts = groupDatas.data.requested;

  useEffect(() => {
    removeMembersFromFriends(friendList, members, accepts, dispatch);
  }, [members]);

  return (
    <div className="w-full h-full">
      {friendNoMemberList.length ? (
        <List className="w-full h-full overflow-y-scroll">
          {friendNoMemberList.map((data, index) => {
            return (
              <GroupAddListItem data={data} key={index} groupId={groupId} />
            );
          })}
        </List>
      ) : (
        <EmptyMessagedComponent message="Friends List" />
      )}
    </div>
  );
};

export default GroupAddList;
