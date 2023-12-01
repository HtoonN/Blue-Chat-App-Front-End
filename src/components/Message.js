import { IconButton, ListItem, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { MoreVert } from "@mui/icons-material";
import callFunForConformationDialog from "../Utlities/ConformationDialogFunfciton/CallFunForConformationDialog";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../socket";

const Message = ({ data, index }) => {
  const dispatch = useDispatch();
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  let mediaType;
  let publicId;
  let statusAlert;

  if (data.seen) {
    statusAlert = activeLanguage.message.seen;
  } else if (data.delievered) {
    statusAlert = activeLanguage.message.delievered;
  } else {
    statusAlert = activeLanguage.message.send;
  }

  if (data.attachFiles[0]) {
    mediaType = data.attachFiles[0].type;
    publicId = data.attachFiles[0].public_id.toString().replace("/", "_");
  }

  //For menu bar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (data.sender !== profileDatas.userId && !data.seen) {
      socket.emit("message-seen", data);
    }
  }, []);

  const messageDeleteControl = (messageId, index) => {
    callFunForConformationDialog(handleClose, dispatch, {
      header: activeLanguage.deleteMessage.header,
      body: activeLanguage.deleteMessage.body,
      funName: "deleteMessageFri",
      data: { messageId, index },
    });
  };

  return (
    <div>
      <ListItem className="flex flex-col">
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
            className={`w-full border-b-2 mb-1  ${
              profileDatas.userId === data.sender
                ? " border-white"
                : " border-blue-900"
            }`}
          >
            <div
              className={`w-10  ${
                profileDatas.userId === data.sender ? "ml-auto " : ""
              }`}
            >
              <IconButton onClick={handleClick}>
                <MoreVert
                  className={`w-10  ${
                    profileDatas.userId === data.sender
                      ? "text-white"
                      : "text-blue-900"
                  }`}
                />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    messageDeleteControl(data._id, index);
                  }}
                  sx={{ color: "#f44336" }}
                >
                  {activeLanguage.message.delete}
                </MenuItem>
              </Menu>
            </div>
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
            }`}
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
            {profileDatas.userId === data.sender && (
              <p className="ml-5 w-[70px] text-right">{statusAlert}</p>
            )}
          </div>
        </div>
      </ListItem>
    </div>
  );
};

export default Message;
