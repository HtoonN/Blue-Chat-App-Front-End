import { Box, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import { setSelectedUser } from "../Redux/Reducer/UserDataREducer";
import FriendsList from "./FriendsSideBox/FriendsList";
import getMessagedFri from "../Utlities/GetMessagedFri";
import selectFunction from "../Utlities/SelectedFunction";

const FriendListBox = () => {
  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");
  const [messagedFriObj, setMessagedFriObj] = useState([]);

  const selectedUser = useSelector(
    (state) => state.userDatas.selectedUser.user
  );
  const messagedFriends = useSelector(
    (state) => state.userDatas.friendsDatas.messagedFriends.friendsList
  );
  const friends = useSelector((state) => state.userDatas.friendsList.list);

  const dispatch = useDispatch();

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };

  useEffect(() => {
    if (messagedFriends.length !== messagedFriObj.length) {
      if (messagedFriends.length) {
        getMessagedFri(messagedFriends, friends, setMessagedFriObj);
      }
    }
  }, [messagedFriends, friends]);

  return (
    <Box
      className="w-[30vw] h-full border-r-2"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <div className="w-full  bg-blue-900 text-white px-2 pt-1 h-16 overflow-hidden">
        <div className="text-bold mb-2">
          {query === "friends" ? "Messages" : "Groups"} List
        </div>
        <h1 className="text-xs font-thin opacity-70">
          Total - {query === "friends" ? messagedFriends.length : "9"}
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
        <div
          className={`w-full h-full bg-red-500 ${
            query === "groups" ? "" : "hidden"
          }`}
        >
          Groups
        </div>
      </div>
    </Box>
  );
};

export default FriendListBox;
