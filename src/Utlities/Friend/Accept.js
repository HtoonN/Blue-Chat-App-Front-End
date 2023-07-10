const axios = require("axios");
const {
  acceptFriend,
  removeRequested,
} = require("../../Redux/Reducer/UserDataREducer");
const { default: getAFriendsData } = require("./GetAFriendsData");

const accFriend = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `http://localhost:3001/api/v1/account/user/accept_friend/${userId}`,
    withCredentials: true,
  });

  if (result.status === 201) {
    dispatch(acceptFriend(userId));
    dispatch(removeRequested(userId));
    getAFriendsData([userId], dispatch);
  }
  setBtnDisabled(false);
};

module.exports = accFriend;
