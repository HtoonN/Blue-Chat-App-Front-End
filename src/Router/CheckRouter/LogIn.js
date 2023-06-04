import React, { useEffect, useState } from "react";
import checkAuth from "../../Utlities/CheckAuth";
import LoginPage from "../../Pages/SubPage/WithoutAuthPage/LoginPage";

const LogIn = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (!auth) {
    return <LoginPage />;
  } else {
    location.assign("user/home_page");
  }
};

export default LogIn;
