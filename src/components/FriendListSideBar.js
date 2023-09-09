import { Box, List, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import { setSelectedUser } from "../Redux/Reducer/UserDataREducer";
import FriendsList from "./FriendsSideBox/FriendsList";
import getMessagedFri from "../Utlities/GetMessagedFri";
import selectFunction from "../Utlities/SelectedFunction";
import GroupList from "./FriendsSideBox/GroupList";
import { setFriendListSideBar } from "../Redux/Reducer/OpenCloseReducer";

const FriendListSideBar = () => {
  const friendListSideBar = useSelector(
    (state) => state.openClose.friendListSideBar
  );

  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");
  const messagedFriObj = useSelector(
    (state) => state.userDatas.messagedFriendsList.list
  );
  const selectedUser = useSelector((state) => state.userDatas.selectedUser.id);
  const notiObj = useSelector((state) => state.userDatas.messagedFriNoti);

  const dispatch = useDispatch();

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };
  //idOnly
  const messagedFriends = useSelector(
    (state) => state.userDatas.friendsDatas.messagedFriends.friendsList
  );
  const groups = useSelector((state) => state.userDatas.profileDatas.groups);

  const friends = useSelector((state) => state.userDatas.friendsList.list);

  useEffect(() => {
    if (messagedFriends.length !== messagedFriObj.length) {
      if (messagedFriends.length) {
        getMessagedFri(messagedFriends, friends, dispatch);
      }
    }
  }, [messagedFriends, friends]);

  const groupListDatas = useSelector(
    (state) => state.userDatas.groupListDatas.list
  );

  const friendListControl = () => {
    dispatch(setFriendListSideBar());
  };

  return (
    <Box
      className={
        friendListSideBar
          ? "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform z-30"
          : "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform -translate-x-full z-30"
      }
      sx={{ display: { md: "none" } }}
    >
      <Paper className="w-[75vw] h-[100vh] md:w-[45vw]" elevation={3}>
        <div className="w-full  bg-blue-900 text-white px-2 py-3 ">
          <div className="text-bold mb-2">
            {query === "friends"
              ? activeLanguage.friendlistsidebar.messagelist
              : activeLanguage.friendlistsidebar.grouplist}
          </div>
          <h1 className="text-xs font-thin opacity-70">
            {activeLanguage.friendlistsidebar.total} -
            {query === "friends" ? messagedFriends.length : groups.length}
          </h1>
        </div>

        <div className="flex w-full justify-around">
          <div
            className={query === "friends" ? active : noActive}
            onClick={() => {
              change("friends");
            }}
          >
            {activeLanguage.friendlistsidebar.friend}
          </div>
          <div
            className={query === "groups" ? active : noActive}
            onClick={() => {
              change("groups");
            }}
          >
            {activeLanguage.friendlistsidebar.group}
          </div>
        </div>
        <div className="w-full h-[calc(100%_-_149px)] ">
          {query === "friends" ? (
            <div
              className={`w-full h-full  ${
                query === "friends" ? "" : "hidden"
              } overflow-y-auto set-scrollbar color-scrollbar`}
            >
              {messagedFriObj?.length ? (
                <List>
                  {messagedFriObj.map((data, index) => {
                    let profileImage;
                    let noti = false;

                    if (data.profileImage) {
                      profileImage = changeImageStringToObj(data.profileImage);
                    }

                    if (notiObj[data.userId]) {
                      noti = notiObj[data.userId];
                    }

                    return (
                      <FriendsList
                        key={index}
                        index={index}
                        data={data}
                        profileImage={profileImage}
                        selectedUser={selectedUser}
                        setSelectedUser={setSelectedUser}
                        selectFunction={selectFunction}
                        dispatch={dispatch}
                        noti={noti}
                        closeFriendListSideBar={friendListControl}
                      />
                    );
                  })}
                </List>
              ) : (
                <EmptyMessagedComponent
                  message={activeLanguage.friendList.nofriend}
                />
              )}
            </div>
          ) : (
            <GroupList
              query={query}
              groupListDatas={groupListDatas}
              closeFriendListSideBar={friendListControl}
            />
          )}
        </div>
      </Paper>
    </Box>
  );
};

export default FriendListSideBar;
