import { AccountCircle } from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import { setChatFriend } from "../Redux/Reducer/UserDataREducer";

const FriendListBox = () => {
  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");
  const [messagedFriObj, setMessagedFriObj] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
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

  const friends = useSelector((state) => state.userDatas.friendsList.list);

  const getMessagedFri = () => {
    let leftUser = [];
    let arr = [];

    if (messagedFriends.length) {
      messagedFriends.map((id) => {
        let foundUser = false;

        friends.map((element) => {
          if (element.userId === id) {
            foundUser = true;
            arr.push(element);
          }
        });

        //CheckFound
        if (!foundUser) {
          leftUser.push(id);
        }
      });

      setMessagedFriObj(arr);
    }
  };

  const selectFunction = (userId, dispatch) => {
    dispatch(setChatFriend(userId));
  };

  useEffect(() => {
    if (messagedFriends.length !== messagedFriObj.length) {
      if (messagedFriends.length) {
        getMessagedFri();
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
                  <div key={index} className=" border-b-2">
                    <ListItem
                      className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
                        index === selectedUser ? "bg-gray-300" : ""
                      } `}
                      onClick={() => {
                        if (index !== selectedUser) {
                          setSelectedUser(index);
                        }
                        selectFunction(data.userId, dispatch);
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar>
                          {data.profileImage ? (
                            <img
                              src={`http://localhost:3001/api/v1/account/user/get_image/${profileImage.public_id}/${profileImage.version}/${profileImage.format}/${profileImage.resource_type}`}
                            />
                          ) : (
                            <AccountCircle className="text-blue-900" />
                          )}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={data.username}
                        secondary={
                          data.status ? (
                            <span
                              className=" bg-green-400 w-14 h-5 flex justify-center items-center rounded-md 
                            text-xs text-white"
                            >
                              <span>Online</span>
                            </span>
                          ) : (
                            <span
                              className=" bg-yellow-400 w-14 h-5 flex justify-center items-center rounded-md 
                            text-xs text-white"
                            >
                              <span>Offline</span>
                            </span>
                          )
                        }
                      />
                    </ListItem>
                  </div>
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
