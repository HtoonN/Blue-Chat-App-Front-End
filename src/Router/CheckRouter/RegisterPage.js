import React, { useEffect, useState } from "react";
import checkAuth from "../Utilities/CheckAuth";

const RegisterPage = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (!auth) {
    return <div>Register</div>;
  } else {
    location.replace("user/home_page");
  }
};

export default RegisterPage;
