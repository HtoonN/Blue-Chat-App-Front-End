const { default: axios } = require("axios");
const { addAddFriend } = require("../../Redux/Reducer/UserDataREducer");

const addPeople = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `http://localhost:3001/api/v1/account/user/add_friend/${userId}`,
    withCredentials: true,
  });

  if (result.status === 201) {
    dispatch(addAddFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = addPeople;
