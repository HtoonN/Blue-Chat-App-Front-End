import {
  setChatFriend,
  setSelectedUser,
} from "../Redux/Reducer/UserDataREducer";

const selectFunction = (selectId, dispatch) => {
  dispatch(setChatFriend(selectId));
  dispatch(setSelectedUser(selectId));
};

export default selectFunction;
