import { addAddMemberList } from "../Redux/Reducer/UserDataREducer";

const removeMembersFromFriends = (friendList, members, accepts, dispatch) => {
  const friendFilteredArray = [];

  //filter members

  //if members
  if (members.length) {
    //if Friends
    if (friendList.length) {
      const membersArray = [];

      for (let i = 0; i < members.length; i++) {
        membersArray.push(members[i]);
      }

      friendList.map((data) => {
        let isMember = false;
        let indexForRemoveFromArray;

        for (let i = 0; i < membersArray.length && !isMember; i++) {
          if (data.userId === membersArray[i]) {
            indexForRemoveFromArray = i;
            isMember = true;
          }
        }

        if (isMember) {
          membersArray.splice(1, indexForRemoveFromArray);
        } else {
          friendFilteredArray.push(data);
        }
      });
    } else {
      //if no friends
      for (let i = 0; i < members.length; i++) {
        friendFilteredArray.push(members[i]);
      }
    }
  } else {
    //if no members
    for (let i = 0; i < friendList.length; i++) {
      friendFilteredArray.push(friendList[i]);
    }
  }

  //filter requested

  //if requested list
  if (accepts.length) {
    const requestedArray = [];

    for (let i = 0; i < accepts.length; i++) {
      requestedArray.push(accepts[i]);
    }

    friendFilteredArray.map((data) => {
      let isMember = false;
      let indexForRemoveFromArray;

      for (let i = 0; i < requestedArray.length && !isMember; i++) {
        if (data.userId === requestedArray[i]) {
          indexForRemoveFromArray = i;
          isMember = true;
        }
      }

      if (isMember) {
        requestedArray.splice(1, indexForRemoveFromArray);
      } else {
        dispatch(addAddMemberList(data));
      }
    });
  } else {
    //no requested array
    for (let i = 0; i < friendFilteredArray.length; i++) {
      dispatch(addAddMemberList(friendFilteredArray[i]));
    }
  }
};
export default removeMembersFromFriends;
