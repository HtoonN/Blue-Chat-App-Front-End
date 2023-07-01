const { default: axios } = require("axios");
const { removeAddFriend } = require("../../Redux/Reducer/UserDataREducer");

const cancelAddFriend = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `http://localhost:3001/api/v1/account/user/cancel_add_friend/${userId}`,
    withCredentials: true,
  });

  if (result.status === 200) {
    dispatch(removeAddFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = cancelAddFriend;
