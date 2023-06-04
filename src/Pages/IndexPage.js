import React, { useEffect } from "react";
import RouterBrower from "../Router/RouterBrower";
import AlertComponent from "./SubPage/InforamtionPage/AlertComponent";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import LoadingComponent from "./SubPage/InforamtionPage/LoadingComponent";
import AlertDialogComponent from "./SubPage/InforamtionPage/AlertDialogComponent";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("auth", false);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <AlertComponent />
        <AlertDialogComponent />
        <LoadingComponent />
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
