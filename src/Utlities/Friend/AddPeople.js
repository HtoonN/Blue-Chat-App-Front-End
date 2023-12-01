const { default: axios } = require("axios");
const { addAddFriend } = require("../../Redux/Reducer/UserDataREducer");

const addPeople = async (userId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  const result = await axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_A}/add_friend/${userId}`,
    withCredentials: true,
  });

  if (result.status === 201) {
    dispatch(addAddFriend(userId));
  }
  setBtnDisabled(false);
};

module.exports = addPeople;
