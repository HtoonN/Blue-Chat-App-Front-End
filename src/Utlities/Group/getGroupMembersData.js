import axios from "axios";
import { addGroupMemberList } from "../../Redux/Reducer/UserDataREducer";

const getGroupMembersData = (members, dispatch) => {
  if (members.memberList.length) {
    members.memberList.map((memberId) => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_person_data/${memberId}`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(addGroupMemberList(res.data.data));
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    });
  }
};
export default getGroupMembersData;
