const { default: axios } = require("axios");
const {
  setAuth,
  setProfileDatas,
  setFriendsDatas,
} = require("../Redux/Reducer/UserDataREducer");
const {
  default: setDelieveredAndGetUnseen,
} = require("./SetDelieveredAndGetUnseen");
const { default: joinToGroupRoom } = require("./JoinToGroupRoom");
const { default: getGroupNoti } = require("./GetGroupNoti");
const { setActiveLanguage } = require("../Redux/Reducer/Preferences");

async function getData(redirect, dispatch, status) {
  const url = `${process.env.REACT_APP_API_A}/get_updated_user_datas_and_update_user_age`;

  dispatch(setAuth("loading"));

  const result = await axios({
    method: "get",
    url,
    withCredentials: true,
  }).catch((error) => {
    console.log(error.response.data.information);
    return {
      status: error.response.status,
    };
  });

  if (status === "auth") {
    if (result.status === 200) {
      dispatch(setProfileDatas(result.data.profile));
      dispatch(setFriendsDatas(result.data.friend));
      dispatch(setAuth("true"));
      setDelieveredAndGetUnseen(dispatch);
      joinToGroupRoom(result.data.profile.groups);
      getGroupNoti(result.data.profile.groups, dispatch);
      dispatch(setActiveLanguage(result.data.profile.language));
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
