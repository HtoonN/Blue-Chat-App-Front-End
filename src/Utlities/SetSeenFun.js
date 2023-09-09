const { setSeenMessage } = require("../Redux/Reducer/UserDataREducer");

const setSeenFun = (msg, dispatch) => {
  dispatch(setSeenMessage(msg));
};

export default setSeenFun;
