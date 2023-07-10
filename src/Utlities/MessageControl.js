const messageControl = (userId, dispatch, setBtnDisabled) => {
  setBtnDisabled(true);
  console.log(userId);
  setBtnDisabled(false);
};

export default messageControl;
