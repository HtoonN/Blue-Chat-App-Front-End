import { addAddMemberList } from "../Redux/Reducer/UserDataREducer";

const removeMembersFromFriends = (friendList, members, dispatch) => {
  friendList.map((data) => {
    let isMember = false;

    for (let i = 0; i < members.length && !isMember; i++) {
      if (data.userId === members[i]) {
        isMember = true;
      }
    }

    if (!isMember) {
      dispatch(addAddMemberList(data));
    }
  });
};
export default removeMembersFromFriends;
