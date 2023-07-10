import axios from "axios";
import { setNotiList } from "../Redux/Reducer/UserDataREducer";

const getNotiData = (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_all_notifications/1`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          setNotiList({
            data: result.data.data,
            nextPage: result.data.nextPage,
          })
        );
      }
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export default getNotiData;
