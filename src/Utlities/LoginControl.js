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
      console.log(result);
      setTimeout(() => {
        dispatch(setLoadingUnseen());
        location.assign("/user/home_page");
      }, 1000);

      localStorage.setItem("userId", result.data.data.data.userId);

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
