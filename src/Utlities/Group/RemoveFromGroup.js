import axios from "axios";
import {
  decreaseTotalGroupMemberFromGroup,
  removeGroupMemberFromList,
} from "../../Redux/Reducer/UserDataREducer";

const removeFromGroup = (groupId, memberId, dispatch, setBtnDisabled) => {
  setBtnDisabled(true);
  if (groupId && memberId) {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/remove_from_group`,
      data: {
        data: {
          memberId: memberId,
          groupId: groupId,
        },
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            removeGroupMemberFromList({ userId: memberId, groupId: groupId })
          );
          dispatch(decreaseTotalGroupMemberFromGroup(groupId));
          setBtnDisabled(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setBtnDisabled(false);
      });
  }
};
export default removeFromGroup;
