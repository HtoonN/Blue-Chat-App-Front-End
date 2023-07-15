import React from "react";
import NoResult from "./NoResult";
import { useSelector } from "react-redux";
import GroupMenuList from "./GroupMenuList";

const GroupMenu = ({ mode }) => {
  const arr = useSelector((state) => state.dataReducer.findFriendsData);

  if (arr.groups.groupsList) {
    if (arr.groups.groupsList.length) {
      return (
        <div
          className={`h-full overflow-y-scroll ${
            mode === "groups" ? "" : "hidden"
          } set-scrollbar color-scrollbar`}
        >
          {arr.groups.groupsList.map((arr, index) => {
            return <GroupMenuList key={index} arr={arr} />;
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
