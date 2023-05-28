import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import rootForRouter from "./RootForRouter";
import UserRootForRouter from "./UserRootForRouter";

const RouterBrower = () => {
  const router = createBrowserRouter([
    { path: "/*", Component: rootForRouter },
    { path: "/user/*", Component: UserRootForRouter },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterBrower;
