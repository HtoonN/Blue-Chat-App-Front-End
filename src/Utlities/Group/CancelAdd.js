const cancelAdd = (groupId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  console.log(groupId);
  setBtnDisabled(false);
};

export default cancelAdd;
