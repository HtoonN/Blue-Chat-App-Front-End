import { setSeen, setText, setUnseen } from "../Redux/Reducer/SetAlert";

const setAlertFun = (dispatch, text) => {
  dispatch(setText(text));
  dispatch(setSeen());
  setTimeout(() => {
    dispatch(setUnseen());
  }, 2000);
};
export default setAlertFun;
