import React, { useEffect, useState } from "react";
import checkAuth from "../Utilities/CheckAuth";

const LogInPage = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (!auth) {
    return <div>LogIn</div>;
  } else {
    location.replace("user/home_page");
  }
};

export default LogInPage;
