import axios from "axios";
import { setFriendsList } from "../../Redux/Reducer/UserDataREducer";

const getAFriendsData = (friId, dispatch) => {
  if (friId.length) {
    friId.map((userId) => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_a_friend_data/${userId}`,
        withCredentials: true,
      }).then((result) => {
        dispatch(setFriendsList(result.data.data));
      });
    });
  }
};
export default getAFriendsData;
