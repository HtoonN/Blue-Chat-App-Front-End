const axios = require("axios");
const {
  setUnFriend,
  removeMessagedFriend,
} = require("../../Redux/Reducer/UserDataREducer");
const { default: setAlertFun } = require("../SetAlertFun");

const unFriend = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_A}/unfriend_user`,
    data: {
      data: {
        friendId: userId,
      },
    },
    withCredentials: true,
  });

  if (result.status === 201) {
    dispatch(removeMessagedFriend(userId));
    setAlertFun(dispatch, "Unfriend");
    dispatch(setUnFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = unFriend;
