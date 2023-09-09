import { setDelieveredMessage } from "../Redux/Reducer/UserDataREducer";

const messageDelieveredAlert = (msg, dispatch) => {
  dispatch(setDelieveredMessage(msg));
};

export default messageDelieveredAlert;
