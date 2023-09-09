import axios from "axios";
import { setMessages } from "../Redux/Reducer/UserDataREducer";
const getGroupMessages = (groupId, dispatch, pageNo) => {
  if (parseInt(pageNo, 10) > 0 && groupId) {
    if (pageNo === 1) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_group_message/${groupId}/1`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(
              setMessages({
                data: res.data.data.data,
                nextPage: res.data.data.nextPage,
              })
            );
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  }
};
export default getGroupMessages;
