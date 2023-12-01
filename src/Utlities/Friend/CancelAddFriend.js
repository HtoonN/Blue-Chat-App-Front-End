const { default: axios } = require("axios");
const { removeAddFriend } = require("../../Redux/Reducer/UserDataREducer");

const cancelAddFriend = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_A}/cancel_add_friend/${userId}`,
    withCredentials: true,
  });

  if (result.status === 200) {
    dispatch(removeAddFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = cancelAddFriend;
