import React, { useEffect, useState } from "react";
import checkAuth from "../../Utlities/CheckAuth";

const Home = () => {
  const [auth, setAuth] = useState(checkAuth());
  console.log(localStorage.getItem("auth"));

  useEffect(() => {
    setAuth(checkAuth());
  }, [localStorage.getItem("auth")]);

  if (auth) {
    return <div>HomePage</div>;
  } else {
    location.assign("/login");
  }
};

export default Home;
