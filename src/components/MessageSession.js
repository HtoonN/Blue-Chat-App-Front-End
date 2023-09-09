import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMessagedWithFriend from "../Utlities/GetMessagesWithFriends";
import MessageBoxSession from "./MessageBoxSession";
import getGroupMessages from "../Utlities/GetGroupMessage";
import getGroupMembersData from "../Utlities/Group/getGroupMembersData";

const MessageSession = () => {
  const selectedUser = useSelector((state) => state.userDatas.selectedUser);
  const groupDatas = useSelector((state) => state.userDatas.chatFriend.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser.status === "group") {
      getGroupMessages(selectedUser.id, dispatch, 1);
      getGroupMembersData(groupDatas.members, dispatch);
    } else {
      getMessagedWithFriend(selectedUser.id, dispatch, 1);
    }
  }, [selectedUser]);

  return (
    <div className="absolute w-full h-[calc(calc(100vh_-_156px)_-_120px)] top-[64px] ">
      <MessageBoxSession selectedUser={selectedUser} />
    </div>
  );
};

export default MessageSession;
