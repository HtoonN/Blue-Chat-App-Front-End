import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGroupRequestedData from "../../Utlities/Group/GetGroupRequestedData";
import { List } from "@mui/material";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import GroupAcceptListItem from "./GroupAcceptListItem";

const GroupAcceptList = ({ activeLanguage }) => {
  const groupDatas = useSelector((state) => state.userDatas.chatFriend.data);
  const selectedUser = useSelector((state) => state.userDatas.selectedUser);
  const groupRequestedList = useSelector(
    (state) => state.userDatas.groupMembersList.accept
  );
  const chatFriend = useSelector((state) => state.userDatas.chatFriend);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser.status === "group" && chatFriend.status) {
      getGroupRequestedData(groupDatas.requested, dispatch, groupRequestedList);
    }
  }, [selectedUser]);

  return (
    <div className="w-full h-full">
      {groupRequestedList.length ? (
        <List className="w-full h-full overflow-y-scroll">
          {groupRequestedList.map((data, index) => {
            return (
              <GroupAcceptListItem
                data={data}
                key={index}
                activeLanguage={activeLanguage}
              />
            );
          })}
        </List>
      ) : (
        <EmptyMessagedComponent message="Requested List" />
      )}
    </div>
  );
};

export default GroupAcceptList;
