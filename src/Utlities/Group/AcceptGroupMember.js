import axios from "axios";
import {
  addGroupMember,
  addGroupMemberList,
  removeGroupAcceptList,
} from "../../Redux/Reducer/UserDataREducer";

const acceptGroupMember = (data, groupId, dispatch, setBtnDisabled) => {
  setBtnDisabled(true);
  console.log(data.userId, groupId);
  if (data.userId && groupId) {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/accept_group`,
      data: {
        data: {
          memberId: data.userId,
          groupId: groupId,
        },
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 201) {
          dispatch(addGroupMemberList(data));
          dispatch(addGroupMember({ groupId: groupId, userId: data.userId }));
          dispatch(
            removeGroupAcceptList({ userId: data.userId, groupId: groupId })
          );
          setBtnDisabled(false);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        setBtnDisabled(false);
      });
  }
};
export default acceptGroupMember;
