import React from "react";
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

const IndexPage = () => {
  return (
    <div>
      <Provider store={store}>
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
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
