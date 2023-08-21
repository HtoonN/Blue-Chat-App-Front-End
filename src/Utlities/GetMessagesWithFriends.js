import axios from "axios";
import { addPreMessages, setMessages } from "../Redux/Reducer/UserDataREducer";
const getMessagedWithFriend = (friendId, dispatch, pageNo) => {
  if (parseInt(pageNo, 10) > 0 && friendId) {
    if (pageNo === 1) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_messages_with_friend/${friendId}?page=1`,
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
    } else {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_messages_with_friend/${friendId}?page=${pageNo}`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("AddPage");
            dispatch(
              addPreMessages({
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
export default getMessagedWithFriend;
