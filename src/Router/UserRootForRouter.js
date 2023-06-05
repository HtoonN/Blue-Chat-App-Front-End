import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./CheckRouter/Home";
import ErrorPage from "../Pages/SubPage/WithoutAuthPage/ErrorPage";

function UserRootForRouter() {
  return (
    <Routes>
      <Route path="" element={<div>user</div>} />
      <Route path="home_page">
        <Route exact path="" element={<Home />} />
        <Route exact path="detail" element={<div>Detail</div>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default UserRootForRouter;
