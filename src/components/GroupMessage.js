import { Box, ListItem, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { AccountCircle, MoreVert } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { socket } from "../socket";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import callFunForConformationDialog from "../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";
import setSeenFun from "../Utlities/SetSeenFun";

const GroupMessage = ({ data, index, memberData }) => {
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  const dispatch = useDispatch();

  //console.log(data);

  let mediaType;
  let publicId;

  if (data.attachFiles[0]) {
    mediaType = data.attachFiles[0].type;
    publicId = data.attachFiles[0].public_id.toString().replace("/", "_");
  }

  //For menu bar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (data.sender !== profileDatas.userId) {
      let seen = false;

      data.seenBy.map((data) => {
        if (data === profileDatas.userId) {
          seen = true;
        }
      });

      if (!seen) {
        setSeenFun({ ...data, seenUserBy: profileDatas.userId }, dispatch);
        socket.emit("message-seen", {
          ...data,
          seenUserBy: profileDatas.userId,
        });
      }
    }
  }, []);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const messageDeleteControl = (messageId, index, groupId) => {
    callFunForConformationDialog(handleClose, dispatch, {
      header: "Delete Message",
      body: "You can't restore it!, It'll remove only for you but you friend will still",
      funName: "deleteGroupMessage",
      data: { messageId, index, groupId },
    });
  };

  let profileImage = {};

  if (memberData && memberData.profileImage) {
    profileImage = changeImageStringToObj(memberData.profileImage);
  }

  return (
    <div>
      <ListItem className="flex flex-col">
        {memberData ? (
          <div className="mr-auto flex flex-row items-center mb-[2px]">
            {memberData.profileImage ? (
              <img
                src={`https://bluechatapp.onrender.com/api/v1/account/user/get_image/${profileImage.public_id}/${profileImage.version}/${profileImage.format}/${profileImage.resource_type}`}
                className="max-w-full max-h-full object-cover w-7 h-7 rounded-full"
              />
            ) : (
              <AccountCircle className="text-blue-900 w-7 h-7 rounded-full bg-gray-300 " />
            )}

            <h1 className="text-xs opacity-60 ml-1">{memberData.username}</h1>
          </div>
        ) : (
          <div className="mr-auto flex flex-row items-center mb-[2px]">
            {data.sender !== profileDatas.userId && (
              <h1 className="text-xs opacity-60">{data.sender}</h1>
            )}
          </div>
        )}
        <div
          className={` ${
            data.attachFiles[0] ? "p-2" : "px-2 py-1"
          } rounded-lg max-w-[85%]  ${
            profileDatas.userId === data.sender
              ? "ml-auto  bg-blue-900  text-white font-thin"
              : "text-blue-900 border-blue-900 border-2 mr-auto"
          } max-h-[550px] `}
        >
          <div
            className={`w-full  mb-1  ${
              profileDatas.userId === data.sender
                ? " border-white"
                : " border-blue-900"
            } relative`}
          >
            <MoreVert
              className={`w-10  ${
                profileDatas.userId === data.sender
                  ? "text-white"
                  : "text-blue-900"
              } cursor-pointer `}
              sx={{
                fontSize: "15px",
                position: "absolute",
                top: "5px",
                right: 0,
                opacity: "0.5",
                ":hover": {
                  opacity: "1",
                },
                ":active": {
                  opacity: "0.3",
                },
              }}
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box
                onClick={() => {
                  messageDeleteControl(data._id, index, data.groupId);
                }}
                sx={{
                  color: "#f44336",
                  fontSize: "10px",
                  marginX: "8px",
                  cursor: "pointer",
                  ":active": {
                    opacity: "0.5",
                  },
                }}
              >
                {activeLanguage.groupMessage.delete}
              </Box>
            </Menu>
          </div>
          {mediaType && (
            <div>
              {mediaType === "image" ? (
                <img
                  src={`https://bluechatapp.onrender.com/api/v1/account/user/get_image/${publicId}/${data.attachFiles[0].version}/${data.attachFiles[0].format}/${data.attachFiles[0].type}`}
                  className="max-w-[300px] max-h-[300px]   object-contain bg-gray-500  ml-auto mr-auto"
                />
              ) : (
                <VideoPlayer data={data.attachFiles[0]} />
              )}
            </div>
          )}
          <div
            className={`${
              data.attachFiles[0]
                ? "w-[300px] max-h-[150px] overflow-y-scroll p-2 m-auto whitespace-pre-line"
                : "max-h-[300px] overflow-y-scroll pb-2 m-auto whitespace-pre-line min-w-[150px]"
            } mt-3`}
          >
            {data.text}
          </div>
          <div
            className={`w-full flex justify-between font-thin  text-xs ${
              profileDatas.userId === data.sender
                ? "opacity-50"
                : "text-blue-900 opacity-90 "
            } ${data.attachFiles[0] && data.text !== " " ? "pt-2" : ""}`}
          >
            <p>{data.createdAt.toString().split("T")[0]}</p>
            <p>
              {activeLanguage.groupMessage.seen} -{" "}
              {data.seenBy.length.toString()}
            </p>
          </div>
        </div>
      </ListItem>
    </div>
  );
};

export default GroupMessage;
