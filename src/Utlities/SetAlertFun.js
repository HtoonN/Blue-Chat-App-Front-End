import {
  setAlertOrigin,
  setHeader,
  setSeen,
  setText,
  setUnseen,
} from "../Redux/Reducer/SetAlert";

const setAlertFun = (dispatch, text, header) => {
  dispatch(setText(text));
  if (header) {
    dispatch(setHeader(header));
  }
  dispatch(setSeen());
  setTimeout(() => {
    dispatch(setUnseen());
  }, 2000);
  setTimeout(() => {
    dispatch(setAlertOrigin());
  }, 3000);
};
export default setAlertFun;
