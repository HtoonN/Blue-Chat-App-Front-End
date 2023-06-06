import React, { useEffect } from "react";
import LoginPage from "../../Pages/SubPage/WithoutAuthPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Utlities/GetUpdateDatas";

const LogIn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      await getData("/user/home_page", dispatch, "noauth");
    }
    get();
  }, []);

  return (
    <div>
      {useSelector((state) => state.userDatas.auth) === "false" ? (
        <LoginPage />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default LogIn;
