import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./CheckRouter/LogIn";
import Register from "./CheckRouter/Register";
import ErrorPage from "../Pages/SubPage/WithoutAuthPage/ErrorPage";

function rootForRouter() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default rootForRouter;
