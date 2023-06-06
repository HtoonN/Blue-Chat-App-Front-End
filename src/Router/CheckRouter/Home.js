import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../Utlities/GetUpdateDatas";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      await getData("/login", dispatch, "auth");
    }
    get();
  }, []);

  const userId = useSelector((state) => state.userDatas.profileDatas.username);
  console.log(useSelector((state) => state.userDatas.profileDatas));
  console.log(useSelector((state) => state.userDatas.friendsDatas));

  return (
    <div>
      {useSelector((state) => state.userDatas.auth) === "true" ? (
        <div>{userId}</div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default Home;
