const { default: axios } = require("axios");
const {
  removeRequested,
  removeRequestedList,
} = require("../../Redux/Reducer/UserDataREducer");

const cancelRequest = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "patch",
    url: `http://localhost:3001/api/v1/account/user/cancel_friend_requested/${userId}`,
    withCredentials: true,
  });
  console.log(result);
  if (result.status === 200) {
    dispatch(removeRequested(userId));
    dispatch(removeRequestedList(userId));
  }
  setBtnDisabled(false);
};
module.exports = cancelRequest;
