import {
  setLoadingSeen,
  setSuccess,
  setTitle,
  setLoadingUnseen,
} from "../Redux/Reducer/LoadingReducer";
import {
  setAlertDialogSeen,
  setBody,
  setHeader,
} from "../Redux/Reducer/AlertDialogReducer";
import login from "./API_Call/Login";

const loginControl = async ({ email, password, dispatch }) => {
  if (email && password) {
    dispatch(setTitle("Logging in"));
    dispatch(setLoadingSeen());

    const result = await login(email, password, dispatch);

    if (!result.error) {
      dispatch(setSuccess());
      setTimeout(() => {
        dispatch(setLoadingUnseen());
        localStorage.setItem("data", result.data.data.cookie);
        location.assign("/user/home_page");
      }, 1500);

      return {
        error: false,
      };
    } else {
      dispatch(setLoadingUnseen());
      dispatch(setHeader("Login Error"));
      dispatch(setBody(result.information));
      dispatch(setAlertDialogSeen());

      return {
        error: true,
      };
    }
  } else {
    dispatch(setHeader("Data Require"));
    dispatch(setBody("Enter username and password"));
    dispatch(setAlertDialogSeen());
    return {
      error: true,
    };
  }
};

export default loginControl;
