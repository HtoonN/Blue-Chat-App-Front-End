import setMessagedFriends from "./SetMessagedFriends";

const startMessageControl = (userId, dispatch, setBtnDisabled) => {
  setBtnDisabled(true);
  setMessagedFriends(userId, dispatch);
  setBtnDisabled(false);
};
export default startMessageControl;
