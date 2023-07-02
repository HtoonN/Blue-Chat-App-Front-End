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

const IndexPage = () => {
  return (
    <div>
      <Provider store={store}>
        <AlertComponent />
        <AlertDialogComponent />
        <FindFriendModel />
        <FriendRequestModel />
        <BlockListModel />
        <LoadingComponent />
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
