import axios from "axios";
import { setMessagedFriendList } from "../../Redux/Reducer/UserDataREducer";

const setMessagedFriendsList = (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_API_A}/get_all_messaged_friends/1`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 200) {
        dispatch(
          setMessagedFriendList({
            data: result.data.data,
            nextPage: result.data.metadata.nextPage,
          })
        );
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
export default setMessagedFriendsList;
