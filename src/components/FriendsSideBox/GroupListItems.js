import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import GroupImageComponent from "../GroupImageComponent";
import clearNotiFun from "../../Utlities/ClearNotiFun";

const GroupListItems = ({
  data,
  profileImage,
  selectFunction,
  dispatch,
  closeFriendListSideBar,
}) => {
  const selectedUser = useSelector((state) => state.userDatas.selectedUser.id);

  const userId = useSelector((state) => state.userDatas.profileDatas.userId);

  const msgNoti = useSelector(
    (state) => state.userDatas.messagedFriNoti[data.groupId]
  );

  let owner = false;

  if (data.admin) {
    data.admin.map((data) => {
      if (data.id === userId && data.status === "owner") {
        owner = true;
      }
    });
  }

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div className=" border-b-2">
      <ListItem
        className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
          data.groupId === selectedUser ? "bg-gray-300" : ""
        } `}
        onClick={() => {
          if (data.groupId !== selectedUser) {
            selectFunction(data.groupId, "group", dispatch, data, owner);
            if (msgNoti) {
              clearNotiFun(data.groupId, dispatch);
            }
            if (closeFriendListSideBar) {
              closeFriendListSideBar();
            }
          }
        }}
      >
        {msgNoti > 0 && (
          <div className="absolute top-[50%] transform -translate-y-[50%] right-5 bg-red-500 px-3  py-1 rounded-xl text-xs text-white">
            {msgNoti}
          </div>
        )}
        <GroupImageComponent data={data} profileImage={profileImage} />
        <ListItemText
          primary={
            <>
              <span>{data.name}</span>
              {owner && (
                <span className="ml-3 py-1 px-2 bg-blue-900 text-white font-bold rounded-lg text-xs">
                  {activeLanguage.groupListItem.owner}
                </span>
              )}
            </>
          }
          secondary={<span>{data.type}</span>}
        />
      </ListItem>
    </div>
  );
};

export default GroupListItems;
