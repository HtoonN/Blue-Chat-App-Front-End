import axios from "axios";
import { addAddMemberListForMember } from "../../Redux/Reducer/UserDataREducer";

const getGroupMembersDataByMember = (
  membersArr,
  dispatch,
  alreadyMemberArr
) => {
  const members = [];
  const hasMembers = [];

  membersArr.map((data) => {
    members.push(data);
  });

  alreadyMemberArr.map((data) => {
    hasMembers.push(data);
  });

  members.map((id) => {
    let isAlready = false;
    let indexForRemove;
    hasMembers.map((memberId, index) => {
      if (memberId.userId === id) {
        isAlready = true;
        indexForRemove = index;
      }
    });

    if (!isAlready) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_A}/get_person_data/${id}`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(addAddMemberListForMember(res.data.data));
          }
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    } else {
      hasMembers.splice(1, indexForRemove);
    }
  });
};
export default getGroupMembersDataByMember;
