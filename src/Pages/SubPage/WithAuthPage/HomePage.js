import React from "react";
//import { useSelector } from "react-redux";
import PrimarySearchAppBar from "../../../components/AppBar";
import FriendListSideBar from "../../../components/FriendListSideBar";
import MessageBox from "../../../components/MessageBox";
import FriendsBar from "../../../components/FriendsBar";

const HomePage = () => {
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
