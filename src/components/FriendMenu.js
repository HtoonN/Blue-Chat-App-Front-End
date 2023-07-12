import React from "react";
import NoResult from "./NoResult";
import { useSelector } from "react-redux";
import FriendMenuList from "./FriendMenuList";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";

const FriendMenu = ({ mode }) => {
  const arr = useSelector((state) => state.dataReducer.findFriendsData);
  const friends = useSelector((state) => state.userDatas.friendsDatas.friends);
  const requested = useSelector(
    (state) => state.userDatas.friendsDatas.requested.list
  );
  const added = useSelector((state) => state.userDatas.friendsDatas.add.list);

  if (arr.friends.friendsList) {
    if (arr.friends.friendsList.length) {
      return (
        <div
          className={`h-full overflow-y-scroll ${
            mode === "friends" ? "" : "hidden"
          } set-scrollbar color-scrollbar`}
        >
          {arr.friends.friendsList.map((arr, index) => {
            let profileimage = {};
            let isFri = false;
            let isRequested = false;
            let isAdded = false;

            if (arr.profileImage) {
              profileimage = changeImageStringToObj(arr.profileImage);
            }

            friends.map((id) => {
              if (id === arr.userId) {
                isFri = true;
              }
            });

            requested.map((id) => {
              if (id === arr.userId) {
                isRequested = true;
              }
            });

            added.map((id) => {
              if (id === arr.userId) {
                isAdded = true;
              }
            });

            return (
              <FriendMenuList
                key={index}
                arr={arr}
                index={index}
                isFri={isFri}
                isRequested={isRequested}
                isAdded={isAdded}
                profileimage={profileimage}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={`w-full h-full ${mode === "friends" ? "" : "hidden"}`}>
          <NoResult />
        </div>
      );
    }
  }
};

export default FriendMenu;
