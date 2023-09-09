import React from "react";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import { List } from "@mui/material";
import changeImageStringToObj from "../../Utlities/ChangeImageStringToObj";
import GroupListItems from "./GroupListItems";
import selectFunction from "../../Utlities/SelectedFunction";
import { useDispatch, useSelector } from "react-redux";
import CreateGroupButton from "./CreateGroupButton";

const GroupList = ({ query, groupListDatas, closeFriendListSideBar }) => {
  const dispatch = useDispatch();

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div className={`w-full h-full ${query === "groups" ? "" : "hidden"}`}>
      <CreateGroupButton />
      {groupListDatas.length ? (
        <List className="w-full h-[calc(100%_-_40px)] overflow-x-hidden overflow-y-scroll set-scrollbar color-scrollbar">
          {groupListDatas.map((data, index) => {
            let profileImage;
            if (data.profileImage) {
              profileImage = changeImageStringToObj(data.profileImage);
            }
            return (
              <GroupListItems
                key={index}
                dispatch={dispatch}
                data={data}
                selectFunction={selectFunction}
                profileImage={profileImage}
                closeFriendListSideBar={closeFriendListSideBar}
              />
            );
          })}
        </List>
      ) : (
        <div className="w-full h-[calc(100%_-_40px)]">
          <EmptyMessagedComponent
            message={activeLanguage.groupListItem.nogroup}
          />
        </div>
      )}
    </div>
  );
};

export default GroupList;
