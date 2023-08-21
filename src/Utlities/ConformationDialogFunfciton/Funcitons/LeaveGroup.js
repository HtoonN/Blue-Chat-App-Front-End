import axios from "axios";
import setAlertFun from "../../SetAlertFun";
import { leaveFromaGroupR } from "../../../Redux/Reducer/UserDataREducer";

const leaveGroup = (dispatch, groupId) => {
  if (groupId) {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_A}/leave_from_group/${groupId}`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          setAlertFun(dispatch, "Leave Group");
          dispatch(leaveFromaGroupR(groupId));
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};

export default leaveGroup;
