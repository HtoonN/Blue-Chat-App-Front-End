import React from "react";
import FriendRequestMenuList from "./FriendRequestMenuList";
import { Skeleton } from "@mui/material";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";

const FriendRequestMenu = ({ arr }) => {
  const data = {
    userId: arr.userId,
    username: arr.username,
    profileImage: arr.profileImage,
  };

  if (data.profileImage) {
    data.profileImage = changeImageStringToObj(arr.profileImage);
  }
  return (
    <div>
      {data ? (
        <div className="w-full h-full">
          <FriendRequestMenuList arr={data} />
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
