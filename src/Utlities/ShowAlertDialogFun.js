import {
  setAlertDialogSeen,
  setBody,
  setHeader,
} from "../Redux/Reducer/AlertDialogReducer";

const showAlertDialog = (dispatch, body, title) => {
  dispatch(setHeader(title));
  dispatch(setBody(body));
  dispatch(setAlertDialogSeen());
};
export default showAlertDialog;
