const getMessagedFri = (messagedFriends, friends, setMessagedFriObj) => {
  let leftUser = [];
  let arr = [];

  if (messagedFriends.length) {
    messagedFriends.map((id) => {
      let foundUser = false;

      friends.map((element) => {
        if (element.userId === id) {
          foundUser = true;
          arr.push(element);
        }
      });

      //CheckFound
      if (!foundUser) {
        leftUser.push(id);
      }
    });

    setMessagedFriObj(arr);
  }
};

export default getMessagedFri;
