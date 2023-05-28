import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./CheckRouter/HomePage";

function UserRootForRouter() {
  return (
    <Routes>
      <Route path="" element={<div>user</div>} />
      <Route path="home_page">
        <Route exact path="" element={<HomePage />} />
        <Route exact path="detail" element={<div>Detail</div>} />
      </Route>
      <Route path="*" element={<div>Error - 404</div>} />
    </Routes>
  );
}

export default UserRootForRouter;
