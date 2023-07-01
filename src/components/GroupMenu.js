import React from "react";
import NoResult from "./NoResult";
import { useSelector } from "react-redux";
import GroupMenuList from "./GroupMenuList";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";

const GroupMenu = ({ mode }) => {
  const arr = useSelector((state) => state.dataReducer.findFriendsData);
  const groups = useSelector((state) => state.userDatas.profileDatas.groups);

  if (arr.groups.groupsList) {
    if (arr.groups.groupsList.length) {
      return (
        <div
          className={`h-full overflow-scroll ${
            mode === "groups" ? "" : "hidden"
          }`}
        >
          {arr.groups.groupsList.map((arr, index) => {
            let profileimage = {};
            let isMember = false;
            let isAdmin = false;

            if (arr.profileImage) {
              profileimage = changeImageStringToObj(arr.profileImage);
            }

            groups.map((group) => {
              if (group.id === arr.groupId) {
                if (group.status === "owner") {
                  isAdmin = true;
                } else {
                  isMember = true;
                }
              }
            });

            return (
              <GroupMenuList
                key={index}
                isAdmin={isAdmin}
                isMember={isMember}
                profileimage={profileimage}
                arr={arr}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={`w-full h-full ${mode === "groups" ? "" : "hidden"}`}>
          <NoResult />
        </div>
      );
    }
  }
};

export default GroupMenu;
