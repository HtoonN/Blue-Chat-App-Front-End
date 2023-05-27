import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./CheckRouter/HomePage";
import LogInPage from "./CheckRouter/LogInPage";
import RegisterPage from "./CheckRouter/RegisterPage";

function rootForRouter() {
  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="home_page" element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default rootForRouter;
