import axios from "axios";
import { cancelGroupRequested } from "../../Redux/Reducer/UserDataREducer";

const cancelRequestedGroup = (groupId, userId, dispatch, btnDisabled) => {
  if (groupId && userId) {
    btnDisabled(true);
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/cancel_group_requested/${groupId}/${userId}`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 201) {
          dispatch(cancelGroupRequested({ groupId: groupId, userId: userId }));
          btnDisabled(false);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        btnDisabled(false);
      });
  }
};
export default cancelRequestedGroup;
