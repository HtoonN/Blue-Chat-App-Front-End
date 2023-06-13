import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { useSelector } from "react-redux";

const FriendListSideBar = () => {
  const friendListSideBar = useSelector(
    (state) => state.openClose.friendListSideBar
  );

  return (
    <Box
      className={
        friendListSideBar
          ? "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform z-30"
          : "fixed w-full bg-opacity-50 transition ease-in-out duration-500 transform -translate-x-full z-30"
      }
      sx={{ display: { md: "none" } }}
      onClick={() => console.log("Box")}
    >
      <Paper className="w-[75vw] h-[100vh] md:w-[45vw]" elevation={3}>
        <div className="w-full  bg-blue-900 text-white px-2 py-3 ">
          <div className="text-bold mb-2">Messages List</div>
          <h1 className="text-xs font-thin opacity-70">Total - 3</h1>
        </div>

        <div className="bg-red">
          <div
            onClick={() => {
              console.log("Friend");
            }}
          >
            Friends
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default FriendListSideBar;
