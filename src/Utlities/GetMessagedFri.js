import { addMessagedFriendList } from "../Redux/Reducer/UserDataREducer";

const getMessagedFri = (messagedFriends, friends, dispatch) => {
  let leftUser = [];

  if (messagedFriends.length) {
    messagedFriends.map((id) => {
      let foundUser = false;

      friends.map((element) => {
        if (element.userId === id) {
          foundUser = true;
          dispatch(addMessagedFriendList(element));
        }
      });

      //CheckFound
      if (!foundUser) {
        leftUser.push(id);
      }
    });
  }
};

export default getMessagedFri;
