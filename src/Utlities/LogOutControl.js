import {
  setAlertDialogSeen,
  setBody,
  setHeader,
} from "../Redux/Reducer/AlertDialogReducer";
import {
  setLoadingSeen,
  setLoadingUnseen,
  setSuccess,
  setTitle,
} from "../Redux/Reducer/LoadingReducer";
import logout from "./API_Call/LogOut";

const logOutControl = async (dispatch, title) => {
  dispatch(setTitle(title));
  dispatch(setLoadingSeen());

  const ans = await logout();

  if (!ans.error) {
    dispatch(setSuccess());
    setTimeout(() => {
      dispatch(setLoadingUnseen());
      localStorage.removeItem("userId");
      location.assign("/login");
    }, 1500);

    return {
      error: false,
    };
  } else {
    dispatch(setLoadingUnseen());

    dispatch(setHeader("Logout"));
    dispatch(setBody(ans.information));
    dispatch(setAlertDialogSeen());

    return {
      error: true,
    };
  }
};
export default logOutControl;
