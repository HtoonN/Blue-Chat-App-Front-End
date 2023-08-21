import axios from "axios";
import { removeMessageForChat } from "../../../Redux/Reducer/UserDataREducer";

const deleteMessageForFriend = (dispatch, data) => {
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_API_A}/delete_personal_message/${data.messageId}`,
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 202) {
        dispatch(removeMessageForChat(data.index));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default deleteMessageForFriend;
