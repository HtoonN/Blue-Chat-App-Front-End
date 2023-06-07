import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const profile = useSelector((state) => state.userDatas.profileDatas);
  const friends = useSelector((state) => state.userDatas.friendsDatas);

  return (
    <div>
      <div>{profile.username}</div>
      <div>{friends.noFriends}</div>
    </div>
  );
};

export default HomePage;
