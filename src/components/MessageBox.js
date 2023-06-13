import React from "react";
import FriendListBox from "./FriendListBox";
import ChatBox from "./ChatBox";
import Box from "@mui/material/Box";

const MessageBox = () => {
  return (
    <div className="flex h-[calc(100vh_-_156px)] w-full">
      <Box>
        <FriendListBox />
      </Box>
      <Box>
        <ChatBox />
      </Box>
    </div>
  );
};

export default MessageBox;
