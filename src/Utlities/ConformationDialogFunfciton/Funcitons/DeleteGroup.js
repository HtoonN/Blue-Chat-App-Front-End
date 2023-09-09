import axios from "axios";
import {
  deleteGroupR,
  setChatFriend,
} from "../../../Redux/Reducer/UserDataREducer";
import setAlertFun from "../../SetAlertFun";

const deleteGroup = (dispatch, groupId) => {
  if (groupId) {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_A}/delete_group/${groupId}`,
      withCredentials: true,
    })
      .then((result) => {
        if (result.status === 200) {
          setAlertFun(dispatch, "Group Deleted");
          setTimeout(() => {
            dispatch(deleteGroupR(groupId));
          }, 1000);
          dispatch(setChatFriend({ data: "", status: "" }));
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};
export default deleteGroup;
