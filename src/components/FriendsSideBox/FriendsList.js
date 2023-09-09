import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import ProfileImageComponents from "../ProfileImageComponents";
import clearNotiFun from "../../Utlities/ClearNotiFun";
import { useSelector } from "react-redux";

const FriendsList = ({
  data,
  profileImage,
  selectedUser,
  selectFunction,
  dispatch,
  closeFriendListSideBar,
}) => {
  const msgNoti = useSelector(
    (state) => state.userDatas.messagedFriNoti[data.userId]
  );
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );
  return (
    <div className=" border-b-2">
      <ListItem
        className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
          data.userId === selectedUser ? "bg-gray-300" : ""
        } `}
        onClick={() => {
          if (data.userId !== selectedUser) {
            selectFunction(data.userId, "friend", dispatch, data);
            if (msgNoti) {
              clearNotiFun(data.userId, dispatch);
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

        <ProfileImageComponents data={data} profileImage={profileImage} />

        <ListItemText
          primary={data.username}
          secondary={
            data.status ? (
              <span className=" bg-green-400 max-w-[120px] h-5 flex justify-center items-center rounded-md text-xs text-white">
                <span>{activeLanguage.friendList.online}</span>
              </span>
            ) : (
              <span className=" bg-yellow-400 max-w-[120px] h-5 flex justify-center items-center rounded-md text-xs text-white">
                <span>{activeLanguage.friendList.offline}</span>
              </span>
            )
          }
        />
      </ListItem>
    </div>
  );
};

export default FriendsList;
