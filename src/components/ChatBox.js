import { Box } from "@mui/material";
import React from "react";
import TypeMessageSession from "./TypeMessageSession";
import ChatHeaderSession from "./ChatHeaderSession";
import MessageSession from "./MessageSession";

const ChatBox = () => {
  return (
    <Box
      className="h-full relative"
      sx={{ width: { xs: "100vw", md: "calc(100vw - 30vw)" } }}
    >
      <ChatHeaderSession />
      <MessageSession />
      <TypeMessageSession />
    </Box>
  );
};

export default ChatBox;
