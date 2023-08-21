import React, { useRef, useState } from "react";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import ProfileImageComponents from "./ProfileImageComponents";
import { IconButton, ListItemText } from "@mui/material";
import GroupImageComponent from "./GroupImageComponent";
import { MoreVert } from "@mui/icons-material";
import GroupMenuBox from "./Group/GroupMenuBox";
import FriendMenuBox from "./Friend/FriendMenuBox";

const ChatHeaderSession = ({ data, isOwner }) => {
  const friendEnchor = useRef(null);
  const groupEnchor = useRef(null);
  const [FriOpen, setFriOpen] = useState(false);
  const [GroupOpen, setGroupOpen] = useState(false);

  let profileImage = "";
  let viewType;

  if (data.profileImage) {
    profileImage = changeImageStringToObj(data.profileImage);
  }

  if (data.userId) {
    viewType = "friend";
  } else if (data.groupId) {
    viewType = "group";
  }
  return (
    <div className="absolute w-full h-16 bg-blue-900 shadow-inner text-white px-2 ">
      {viewType === "group" ? (
        <div className=" w-full h-full flex flex-row items-center justify-between">
          <div className="h-full flex flex-row items-center justify-start">
            <GroupImageComponent
              data={data}
              profileImage={profileImage}
              className="mb-1"
            />
            <ListItemText
              className="mt-1"
              primary={data.name}
              secondary={
                <span className="text-white opacity-60 font-thin">
                  {data.type} - ({` Members - ${data.members.totalMember} `})
                </span>
              }
            />
          </div>
          <div>
            <IconButton
              ref={groupEnchor}
              onClick={() => {
                setGroupOpen(true);
              }}
            >
              <MoreVert className="text-white" />
            </IconButton>
            <GroupMenuBox
              open={GroupOpen}
              setOpen={setGroupOpen}
              anchorRef={groupEnchor}
              isOwner={isOwner}
              data={data}
            />
          </div>
        </div>
      ) : (
        <div className=" w-full h-full flex flex-row items-center justify-between ">
          <div className="h-full flex flex-row items-center justify-start">
            <ProfileImageComponents
              data={data}
              profileImage={profileImage}
              className="mb-1"
            />

            <ListItemText
              className="mt-1"
              primary={data.username}
              secondary={
                data.status ? (
                  <span className="flex justify-start items-center w-24">
                    <span className=" bg-green-400 w-3 h-3 rounded-full mr-1" />
                    <span className="text-white opacity-50 font-thin">
                      online
                    </span>
                  </span>
                ) : (
                  <span className="flex justify-start items-center w-24">
                    <span className=" bg-yellow-400 w-3 h-3 rounded-full mr-1" />
                    <span className="text-white opacity-50 font-thin">
                      offline
                    </span>
                  </span>
                )
              }
            />
          </div>
          <div>
            <IconButton
              ref={friendEnchor}
              onClick={() => {
                setFriOpen(true);
              }}
            >
              <MoreVert className="text-white" />
            </IconButton>
            <FriendMenuBox
              open={FriOpen}
              setOpen={setFriOpen}
              anchorRef={friendEnchor}
              data={data}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatHeaderSession;
