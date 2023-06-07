import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Utlities/GetUpdateDatas";
import HomePage from "../../Pages/SubPage/WithAuthPage/HomePage";
import LoadingComponents from "../../components/LoadingComponents";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      await getData("/login", dispatch, "auth");
    }
    get();
  }, []);

  return (
    <div>
      {useSelector((state) => state.userDatas.auth) === "true" ? (
        <HomePage />
      ) : (
        <LoadingComponents />
      )}
    </div>
  );
};

export default Home;
