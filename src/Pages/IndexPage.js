import React, { useEffect } from "react";
import RouterBrower from "../Router/RouterBrower";
import AlertComponent from "./SubPage/InforamtionPage/AlertComponent";
import LoadingComponent from "./SubPage/InforamtionPage/LoadingComponent";
import AlertDialogComponent from "./SubPage/InforamtionPage/AlertDialogComponent";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import FindFriendModel from "../components/FindFriendModel";
import FriendRequestModel from "../components/FriendRequestModel";
import BlockListModel from "../components/BlockListModel/BlockListModel";
import AddedListModel from "../components/AddedListModel/AddedListModel";
import CreateGroup from "../components/CreateGroup";
import ConfirmationDialog from "./SubPage/InforamtionPage/ConfirmationDialog";
import ManageGroupMembersModel from "../components/Group/ManageGroupMembersModel";
import MemberListModel from "../components/Group/MemberListModel";
import Profile from "../components/Profile";
import GroupProfileChange from "../components/GroupProfileChange";
import { socket } from "../socket";
import ConnectionManager from "../components/ConnectionManager";
import SocketListening from "../SocketListening";
import GetPasswordForAccountDeactivation from "../components/GetPasswordForAccountDeactivation";
import ChangeLanguage from "../components/ChangeLanguage";

const IndexPage = () => {
  useEffect(() => {
    socket.on("connect", () => {});
    socket.on("disconnect", () => {});
    return () => {
      socket.off("connect", () => {});
      socket.off("disconnect", () => {});
    };
  }, []);

  return (
    <div>
      <Provider store={store}>
        <ChangeLanguage />
        <GetPasswordForAccountDeactivation />
        <ConnectionManager />
        <SocketListening />
        <Profile />
        <MemberListModel />
        <ConfirmationDialog />
        <AlertComponent />
        <AlertDialogComponent />
        <FindFriendModel />
        <FriendRequestModel />
        <BlockListModel />
        <AddedListModel />
        <LoadingComponent />
        <CreateGroup />
        <ManageGroupMembersModel />
        <GroupProfileChange />
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
