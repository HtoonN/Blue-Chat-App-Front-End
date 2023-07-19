import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import GroupImageComponent from "../GroupImageComponent";

const GroupListItems = ({ data, profileImage, selectFunction, dispatch }) => {
  const selectedUser = useSelector(
    (state) => state.userDatas.selectedUser.user
  );

  const userId = useSelector((state) => state.userDatas.profileDatas.userId);

  let owner = false;

  data.admin.map((data) => {
    if (data.id === userId && data.status === "owner") {
      owner = true;
    }
  });

  return (
    <div className=" border-b-2">
      <ListItem
        className={`cursor-pointer hover:bg-gray-100 active:bg-gray-200 ${
          data.groupId === selectedUser ? "bg-gray-300" : ""
        } `}
        onClick={() => {
          if (data.groupId !== selectedUser) {
            selectFunction(data.groupId, dispatch);
          }
        }}
      >
        <GroupImageComponent data={data} profileImage={profileImage} />
        <ListItemText
          primary={
            <>
              <span>{data.name}</span>
              <span className="ml-3 p-1 bg-blue-900 text-white font-bold rounded-lg text-xs">
                {owner ? "Owner" : ""}
              </span>
            </>
          }
          secondary={<span>{data.type}</span>}
        />
      </ListItem>
    </div>
  );
};

export default GroupListItems;
