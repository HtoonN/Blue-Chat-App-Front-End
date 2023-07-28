import axios from "axios";
import { setNotiItemSeen } from "../Redux/Reducer/UserDataREducer";

const setNotiSeen = (index, id, dispatch) => {
  dispatch(setNotiItemSeen({ index }));
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/set_notification_seen/${id}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        // console.log(result.statusText);
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default setNotiSeen;
