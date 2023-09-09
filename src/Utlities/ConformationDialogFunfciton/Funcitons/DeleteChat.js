import axios from "axios";
import {
  removeMessagedFriend,
  setChatFriend,
  setMessageEmptyForDeleteChat,
} from "../../../Redux/Reducer/UserDataREducer";
import setAlertFun from "../../SetAlertFun";

const deleteChat = (dispatch, friendId) => {
  console.log(friendId);
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/delete_chat`,
    data: {
      data: {
        friendId,
      },
    },
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        setAlertFun(dispatch, "Delete Chat");
        dispatch(setMessageEmptyForDeleteChat(friendId));
        dispatch(removeMessagedFriend(friendId));
        dispatch(setChatFriend({ data: "", status: "" }));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default deleteChat;
