const { default: axios } = require("axios");
const { addBlockList } = require("../../Redux/Reducer/UserDataREducer");
const { removeFindFriendsData } = require("../../Redux/Reducer/DataReducer");

const blockPeople = (userId, dispatch, setBtnDisabled) => {
  setBtnDisabled(true);

  if (userId) {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/block_user`,
      data: {
        data: {
          friendId: userId,
        },
      },
      withCredentials: true,
    })
      .then((result) => {
        if (result.status === 201) {
          dispatch(addBlockList(userId));
          dispatch(removeFindFriendsData(userId));
          setBtnDisabled(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setBtnDisabled(false);
      });
  }
};
module.exports = blockPeople;
