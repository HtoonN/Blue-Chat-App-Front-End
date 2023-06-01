import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "./CheckRouter/LogIn";
import Register from "./CheckRouter/Register";

function rootForRouter() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default rootForRouter;
