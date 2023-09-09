import axios from "axios";
import { addMessagedFriNoti } from "../Redux/Reducer/UserDataREducer";

const getGroupNoti = (groupId, dispatch) => {
  if (groupId) {
    groupId.map((data) => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_group_noti/${data.id}`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(
              addMessagedFriNoti({ groupId: data.id, notiNo: res.data })
            );
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    });
  }
};

export default getGroupNoti;
