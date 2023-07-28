import axios from "axios";
import {
  removeMessagedFriend,
  setUnFriend,
} from "../../../Redux/Reducer/UserDataREducer";
import setAlertFun from "../../SetAlertFun";

const unfriend = async (dispatch, userId) => {
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
    dispatch(removeMessagedFriend(userId));
    setAlertFun(dispatch, "Unfriend");
  }
};
export default unfriend;
