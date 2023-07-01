const axios = require("axios");
const { setUnFriend } = require("../../Redux/Reducer/UserDataREducer");

const unFriend = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `http://localhost:3001/api/v1/account/user/unfriend_user`,
    data: {
      data: {
        friendId: userId,
      },
    },
    withCredentials: true,
  });

  if (result.status === 201) {
    dispatch(setUnFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = unFriend;
