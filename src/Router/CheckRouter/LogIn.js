import React, { useEffect, useState } from "react";
import checkAuth from "../../Utlities/CheckAuth";

const LogIn = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (!auth) {
    return <div>LogIn</div>;
  } else {
    location.assign("user/home_page");
  }
};

export default LogIn;
