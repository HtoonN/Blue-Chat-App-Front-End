import axios from "axios";
import { addGroupMemberByAdminR } from "../Redux/Reducer/UserDataREducer";

const addGroupMemberByAdmin = (data, groupId, btnDisabled, dispatch) => {
  btnDisabled(true);
  if (data.userId && groupId) {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_A}/add_member_by_admin/${groupId}/${data.userId}`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          btnDisabled(false);
          dispatch(addGroupMemberByAdminR({ data: data, groupId: groupId }));
        }
      })
      .catch((e) => {
        console.log(e);
        btnDisabled(false);
      });
  }
};
export default addGroupMemberByAdmin;
