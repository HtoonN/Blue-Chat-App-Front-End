import axios from "axios";
import { addAddedGroup } from "../../Redux/Reducer/UserDataREducer";

const groupAddFun = (groupId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_API_A}/add_group/${groupId}`,
    withCredentials: true,
  })
    .then((result) => {
      if (result.status === 201) {
        dispatch(addAddedGroup(groupId));
      }
      setBtnDisabled(false);
    })
    .catch((e) => {
      console.log(e.response.data);
      setBtnDisabled(false);
    });
};
export default groupAddFun;
