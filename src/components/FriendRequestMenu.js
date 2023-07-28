import React from "react";
import FriendRequestMenuList from "./FriendRequestMenuList";
import { Skeleton } from "@mui/material";

const FriendRequestMenu = ({ arr }) => {
  return (
    <div>
      {arr ? (
        <div className="w-full h-full">
          <FriendRequestMenuList arr={arr} />
        </div>
      ) : (
        <div className="w-full h-24 mb-5">
          <Skeleton variant="rounded" sx={{ width: "100%", height: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default FriendRequestMenu;
