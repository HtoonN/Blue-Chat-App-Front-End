import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="about/detail" element={<div>About Detail</div>} />
        <Route path="posts" element={<div>posts</div>} />
      </Routes>
    </Router>
  );
}
