import axios from "axios";
import setAlertFun from "../../SetAlertFun";
import {
  addBlockList,
  removeMessagedFriend,
  setUnFriend,
} from "../../../Redux/Reducer/UserDataREducer";

const blockUser = (dispatch, userId) => {
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
          dispatch(removeMessagedFriend(userId));
          setAlertFun(dispatch, "Blocked");
          dispatch(setUnFriend(userId));
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};
export default blockUser;
