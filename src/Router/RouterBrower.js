import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import rootForRouter from "./RootForRouter";
//import BlogApp from "./Blog";

const RouterBrower = () => {
  const router = createBrowserRouter([{ path: "*", Component: rootForRouter }]);
  return <RouterProvider router={router} />;
};

export default RouterBrower;
