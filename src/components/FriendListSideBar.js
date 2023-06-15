import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FriendListSideBar = () => {
  const friendListSideBar = useSelector(
    (state) => state.openClose.friendListSideBar
  );

  const active = "text-blue-900 font-extrabold my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-40 cursor-pointer active:opacity-20 ";

  const [query, setQuery] = useState("friends");

  const change = (option) => {
    if (option !== query) {
      setQuery(option);
    }
  };

  return (
    <Box
      className={
        friendListSideBar
          ? "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform z-30"
          : "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform -translate-x-full z-30"
      }
      sx={{ display: { md: "none" } }}
    >
      <Paper className="w-[75vw] h-[100vh] md:w-[45vw]" elevation={3}>
        <div className="w-full  bg-blue-900 text-white px-2 py-3 ">
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
        <div className="w-full h-[calc(100%_-_109px)] ">Hello</div>
      </Paper>
    </Box>
  );
};

export default FriendListSideBar;
