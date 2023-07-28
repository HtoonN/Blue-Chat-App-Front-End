const { default: axios } = require("axios");
const { leaveFromaGroupR } = require("../../Redux/Reducer/UserDataREducer");

const leaveGroup = (groupId, setBtnDisabled, dispatch) => {
  setBtnDisabled(true);
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_API_A}/leave_from_group/${groupId}`,
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        setBtnDisabled(false);
        dispatch(leaveFromaGroupR(groupId));
      }
    })
    .catch((e) => {
      console.log(e.response.data);
      setBtnDisabled(false);
    });
};

module.exports = leaveGroup;
