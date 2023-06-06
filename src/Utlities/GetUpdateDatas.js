const { default: axios } = require("axios");
const {
  setAuth,
  setProfileDatas,
  setFriendsDatas,
} = require("../Redux/Reducer/UserDataREducer");

async function getData(redirect, dispatch, status) {
  dispatch(setAuth("loading"));
  const result = await axios({
    method: "get",
    url: "http://localhost:3001/api/v1/account/user/get_updated_user_datas_and_update_user_age",
    withCredentials: true,
  }).catch((error) => {
    return {
      status: error.response.status,
    };
  });
  if (status === "auth") {
    if (result.status === 200) {
      dispatch(setProfileDatas(result.data.profile));
      dispatch(setFriendsDatas(result.data.friend));

      dispatch(setAuth("true"));
    } else {
      location.assign(redirect);
    }
  }
  if (status === "noauth") {
    if (result.status === 200) {
      location.assign(redirect);
    } else {
      dispatch(setAuth("false"));
    }
  }
}

module.exports = getData;
