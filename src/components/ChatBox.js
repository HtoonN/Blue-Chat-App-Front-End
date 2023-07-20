import { Box } from "@mui/material";
import React from "react";
import TypeMessageSession from "./TypeMessageSession";
import ChatHeaderSession from "./ChatHeaderSession";
import MessageSession from "./MessageSession";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const chatFriendDatas = useSelector(
    (state) => state.userDatas.chatFriend.data
  );
  const isOwner = useSelector((state) => state.userDatas.chatFriend.status);

  return (
    <Box
      className="h-full relative"
      sx={{ width: { xs: "100vw", md: "calc(100vw - 30vw)" } }}
    >
      {chatFriendDatas ? (
        <Box>
          <ChatHeaderSession data={chatFriendDatas} isOwner={isOwner} />
          <MessageSession />
          <TypeMessageSession />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default ChatBox;
