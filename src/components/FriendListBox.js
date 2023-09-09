import { Box, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import FriendsList from "./FriendsSideBox/FriendsList";
import getMessagedFri from "../Utlities/GetMessagedFri";
import selectFunction from "../Utlities/SelectedFunction";
import GroupList from "./FriendsSideBox/GroupList";
import getGroupDatasAsMember from "../Utlities/Group/GetGroupDatasAsmember";

const FriendListBox = () => {
  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");
  const messagedFriObj = useSelector(
    (state) => state.userDatas.messagedFriendsList.list
  );

  const selectedUser = useSelector((state) => state.userDatas.selectedUser.id);
  const messagedFriends = useSelector(
    (state) => state.userDatas.friendsDatas.messagedFriends.friendsList
  );
  const friends = useSelector((state) => state.userDatas.friendsList.list);
  const groups = useSelector((state) => state.userDatas.profileDatas.groups);

  const dispatch = useDispatch();

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };

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

  useEffect(() => {
    if (!groupListDatas.length) {
      if (groups.length) {
        groups.map((group) => {
          let status = "memeber";
          if (group.status === "owner") {
            status = "admin";
          }
          getGroupDatasAsMember(group.id, status, dispatch);
        });
      }
    }
  }, []);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <Box
      className="w-[30vw] h-full border-r-2"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <div className="w-full  bg-blue-900 text-white px-2 pt-1 h-16 overflow-hidden">
        <div className="text-bold mb-2">
          {query === "friends"
            ? activeLanguage.friendlistsidebar.messagelist
            : activeLanguage.friendlistsidebar.grouplist}
        </div>
        <h1 className="text-xs font-thin opacity-70">
          {activeLanguage.friendlistsidebar.total} -{" "}
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
      <div className="w-full h-[calc(100%_-_94.48px)] lg:h-[calc(100%_-_97.47px)] ">
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
                    selectFunction={selectFunction}
                    dispatch={dispatch}
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
        <GroupList query={query} groupListDatas={groupListDatas} />
      </div>
    </Box>
  );
};

export default FriendListBox;
