import { Box } from "@mui/material";
import React from "react";

const FriendListBox = () => {
  return (
    <Box
      className="w-[30vw] h-full border-r-2"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <div className="w-full  bg-blue-900 text-white px-2 pt-1 h-16 overflow-hidden">
        <div className="text-bold mb-2">Messages List</div>
        <h1 className="text-xs font-thin opacity-70">Total - 3</h1>
      </div>
    </Box>
  );
};

export default FriendListBox;
