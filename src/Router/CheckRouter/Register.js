import React, { useEffect, useState } from "react";
import checkAuth from "../../Utlities/CheckAuth";
import RegisterPage from "../../Pages/SubPage/WithoutAuthPage/RegisterPage";

const Register = () => {
  const [auth, setAuth] = useState(checkAuth());

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (!auth) {
    return <RegisterPage />;
  } else {
    location.assign("user/home_page");
  }
};

export default Register;
