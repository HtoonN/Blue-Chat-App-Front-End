import React, { useEffect } from "react";
import PrimarySearchAppBar from "../../../components/AppBar";
import FriendListSideBar from "../../../components/FriendListSideBar";
import MessageBox from "../../../components/MessageBox";
import FriendsBar from "../../../components/FriendsBar";

const HomePage = () => {
  useEffect(() => {
    document.title = "Blue Chat App | Home";
  }, []);

  return (
    <div>
      <PrimarySearchAppBar />
      <FriendListSideBar />
      <FriendsBar />
      <MessageBox />
    </div>
  );
};

export default HomePage;
