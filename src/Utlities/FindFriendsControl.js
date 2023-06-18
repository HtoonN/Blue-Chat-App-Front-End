const { setFindFriendsData } = require("../Redux/Reducer/DataReducer");
const { setFindFriendsModel } = require("../Redux/Reducer/OpenCloseReducer");
const findFriends = require("./API_Call/FindFriends");

const findFriendsControl = async (text, dispatch) => {
  const pattern = /[a-z]+[0-9]*|[a-z]*[0-9]+/i;
  const result = pattern.test(text);

  if (text && result) {
    dispatch(setFindFriendsData("searching"));
    dispatch(setFindFriendsModel());
    const result = await findFriends(text);
    if (result.error) {
      console.log(result.information);
    } else {
      dispatch(
        setFindFriendsData({ friends: result.peoples, groups: result.groups })
      );
      console.log(result);
    }
  }
};

module.exports = findFriendsControl;
