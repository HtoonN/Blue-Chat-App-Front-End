const { default: axios } = require("axios");
const {
  removeRequested,
  removeRequestedList,
} = require("../../Redux/Reducer/UserDataREducer");

const cancelRequest = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/cancel_friend_requested/${userId}`,
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
