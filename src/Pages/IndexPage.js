import React, { useEffect } from "react";
import RouterBrower from "../Router/RouterBrower";
import AlertComponent from "./SubPage/InforamtionPage/AlertComponent";
import { Provider } from "react-redux";
import store from "../Redux/store";

const IndexPage = () => {
  useEffect(() => {
    localStorage.setItem("auth", false);
  }, []);

  return (
    <div>
      <Provider store={store}>
        <AlertComponent />
        <RouterBrower />
      </Provider>
    </div>
  );
};

export default IndexPage;
