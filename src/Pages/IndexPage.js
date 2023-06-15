import React from "react";
import RouterBrower from "../Router/RouterBrower";
import AlertComponent from "./SubPage/InforamtionPage/AlertComponent";
import LoadingComponent from "./SubPage/InforamtionPage/LoadingComponent";
import AlertDialogComponent from "./SubPage/InforamtionPage/AlertDialogComponent";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import FindFriendModel from "../components/FindFriendModel";

const IndexPage = () => {
  return (
    <div>
      <Provider store={store}>
        <FindFriendModel />
        <AlertComponent />
        <AlertDialogComponent />
        <LoadingComponent />
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
