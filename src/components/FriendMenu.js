import React from "react";
import NoResult from "./NoResult";
import { useSelector } from "react-redux";
import FriendMenuList from "./FriendMenuList";

const FriendMenu = ({ mode }) => {
  const arr = useSelector((state) => state.dataReducer.findFriendsData);
  const friends = useSelector((state) => state.userDatas.friendsDatas.friends);

  if (arr.friends.friendsList) {
    if (arr.friends.friendsList.length) {
      return (
        <div
          className={`h-full overflow-scroll ${
            mode === "friends" ? "" : "hidden"
          }`}
        >
          {arr.friends.friendsList.map((arr, index) => {
            let profileimage = {};
            let isFri = false;

            if (arr.profileImage) {
              profileimage = JSON.parse(arr.profileImage);
              profileimage.public_id = profileimage.public_id
                .toString()
                .replace("/", "_");
            }

            friends.map((id) => {
              if (id === arr.userId) {
                isFri = true;
              }
            });

            return (
              <FriendMenuList
                key={index}
                arr={arr}
                index={index}
                isFri={isFri}
                profileimage={profileimage}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="w-full h-full">
          <NoResult />
        </div>
      );
    }
  }
};

export default FriendMenu;
