import axios from "axios";
import { removeMessageForChat } from "../../../Redux/Reducer/UserDataREducer";

const deleteGroupMessage = (dispatch, data) => {
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/delete_group_message`,
    withCredentials: true,
    data: {
      data: {
        groupId: data.groupId,
        messageId: data.messageId,
      },
    },
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(removeMessageForChat(data.index));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default deleteGroupMessage;
