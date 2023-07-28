import axios from "axios";
import { cancelAddedGroup } from "../../Redux/Reducer/UserDataREducer";

const cancelAdd = (groupId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/cancel_group_added/${groupId}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 201) {
        dispatch(cancelAddedGroup(groupId));
      }
      setBtnDisabled(false);
    })
    .catch((e) => {
      console.log(e.response.data);
      setBtnDisabled(false);
    });
};

export default cancelAdd;
