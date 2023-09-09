import axios from "axios";
import { setMessagedFriNoti } from "../Redux/Reducer/UserDataREducer";

const setDelieveredAndGetUnseen = (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/set_all_received_messages_delievered`,
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(setMessagedFriNoti(res.data));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export default setDelieveredAndGetUnseen;
