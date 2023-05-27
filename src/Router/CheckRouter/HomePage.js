import React, { useEffect, useState } from "react";
import checkAuth from "../Utilities/CheckAuth";

const HomePage = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (auth) {
    return <div>HomePage</div>;
  } else {
    location.replace("/login");
  }
};

export default HomePage;
