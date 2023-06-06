import React, { useEffect } from "react";
import RegisterPage from "../../Pages/SubPage/WithoutAuthPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Utlities/GetUpdateDatas";

const Register = () => {
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
        <RegisterPage />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Register;
