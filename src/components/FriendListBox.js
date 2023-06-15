import { Box } from "@mui/material";
import React, { useState } from "react";

const FriendListBox = () => {
  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-50 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };

  return (
    <Box
      className="w-[30vw] h-full border-r-2"
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <div className="w-full  bg-blue-900 text-white px-2 pt-1 h-16 overflow-hidden">
        <div className="text-bold mb-2">Messages List</div>
        <h1 className="text-xs font-thin opacity-70">Total - 3</h1>
      </div>
      <div className="flex w-full justify-around">
        <div
          className={query === "friends" ? active : noActive}
          onClick={() => {
            change("friends");
          }}
        >
          Friends
        </div>
        <div
          className={query === "groups" ? active : noActive}
          onClick={() => {
            change("groups");
          }}
        >
          Groups
        </div>
      </div>
      <div className="w-full h-[calc(100%_-_94.48px)] lg:h-[calc(100%_-_97.47px)] ">
        Hello
      </div>
    </Box>
  );
};

export default FriendListBox;
