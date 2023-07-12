import axios from "axios";
import { addMessagedFriend } from "../Redux/Reducer/UserDataREducer";

const setMessagedFriends = (userId, dispatch) => {
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/set_message_friend`,
    data: {
      data: {
        friendId: userId,
      },
    },
    withCredentials: true,
  })
    .then((result) => {
      console.log(result);
      dispatch(addMessagedFriend(userId));
    })
    .catch((e) => {
      console.log(e);
    });
};
export default setMessagedFriends;
