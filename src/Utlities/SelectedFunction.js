import {
  setChatFriend,
  setSelectedUser,
} from "../Redux/Reducer/UserDataREducer";

const selectFunction = (userId, dispatch, index) => {
  dispatch(setChatFriend(userId));
  dispatch(setSelectedUser(index));
};

export default selectFunction;
