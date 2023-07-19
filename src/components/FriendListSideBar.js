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

const FriendListSideBar = () => {
  const friendListSideBar = useSelector(
    (state) => state.openClose.friendListSideBar
  );

  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");
  const [messagedFriObj, setMessagedFriObj] = useState([]);
  const selectedUser = useSelector(
    (state) => state.userDatas.selectedUser.user
  );
  const dispatch = useDispatch();

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
        getMessagedFri(messagedFriends, friends, setMessagedFriObj);
      }
    }
  }, [messagedFriends, friends]);

  const groupListDatas = useSelector(
    (state) => state.userDatas.groupListDatas.list
  );

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
            {query === "friends" ? "Messages" : "Groups"} List
          </div>
          <h1 className="text-xs font-thin opacity-70">
            Total -
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
            Friends
          </div>
          <div
            className={query === "groups" ? active : noActive}
            onClick={() => {
              change("groups");
            }}
          >
            Groups
          </div>
        </div>
        <div className="w-full h-[calc(100%_-_109px)] ">
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

                    if (data.profileImage) {
                      profileImage = changeImageStringToObj(data.profileImage);
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
                      />
                    );
                  })}
                </List>
              ) : (
                <EmptyMessagedComponent message="No Messaged Friend" />
              )}
            </div>
          ) : (
            <GroupList query={query} groupListDatas={groupListDatas} />
          )}
        </div>
      </Paper>
    </Box>
  );
};

export default FriendListSideBar;
