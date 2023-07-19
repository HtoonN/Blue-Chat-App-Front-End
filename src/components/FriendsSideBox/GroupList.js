import React from "react";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import { List } from "@mui/material";
import changeImageStringToObj from "../../Utlities/ChangeImageStringToObj";
import GroupListItems from "./GroupListItems";
import selectFunction from "../../Utlities/SelectedFunction";
import { useDispatch } from "react-redux";
import CreateGroupButton from "./CreateGroupButton";

const GroupList = ({ query, groupListDatas }) => {
  const dispatch = useDispatch();

  return (
    <div className={`w-full h-full ${query === "groups" ? "" : "hidden"}`}>
      <CreateGroupButton />
      {groupListDatas.length ? (
        <List className="w-full h-[calc(100%_-_40px)] overflow-x-hidden overflow-y-scroll">
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
              />
            );
          })}
        </List>
      ) : (
        <EmptyMessagedComponent message="No Groups" />
      )}
    </div>
  );
};

export default GroupList;
