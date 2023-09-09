import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import rootForRouter from "./RootForRouter";
import UserRootForRouter from "./UserRootForRouter";
import { useDispatch } from "react-redux";
import { setActiveLanguage } from "../Redux/Reducer/Preferences";

const RouterBrower = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveLanguage(localStorage.getItem("language")));
  }, [localStorage.getItem("language")]);

  const router = createBrowserRouter([
    { path: "/*", Component: rootForRouter },
    { path: "/user/*", Component: UserRootForRouter },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterBrower;
