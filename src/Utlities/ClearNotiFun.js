import { removeMessageFriNoti } from "../Redux/Reducer/UserDataREducer";

const clearNotiFun = (userId, dispatch) => {
  dispatch(removeMessageFriNoti({ userId }));
};
export default clearNotiFun;
