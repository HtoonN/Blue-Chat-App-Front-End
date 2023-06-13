import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./CheckRouter/Home";
import ErrorPageUser from "../Pages/SubPage/WithAuthPage/ErrorPageUser";

function UserRootForRouter() {
  return (
    <Routes>
      <Route path="home_page">
        <Route exact path="" element={<Home />} />
        <Route exact path="detail" element={<div>Detail</div>} />
      </Route>
      <Route path="*" element={<ErrorPageUser />} />
    </Routes>
  );
}

export default UserRootForRouter;
