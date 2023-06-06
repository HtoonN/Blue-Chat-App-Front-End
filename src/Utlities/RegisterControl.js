import {
  setLoadingSeen,
  setLoadingUnseen,
  setSuccess,
  setTitle,
} from "../Redux/Reducer/LoadingReducer";
import {
  setAlertDialogSeen,
  setBody,
  setHeader,
} from "../Redux/Reducer/AlertDialogReducer";
import register from "./API_Call/Register";
import { setProfileDatas } from "../Redux/Reducer/UserDataREducer";

const registerControl = async ({
  username,
  password,
  email,
  rePassword,
  dispatch,
}) => {
  if (username && password && email && rePassword) {
    let information = "";
    if (password === rePassword) {
      dispatch(setTitle("Registering"));
      dispatch(setLoadingSeen());

      const ans = await register({ username, email, password }, dispatch);

      if (!ans.error) {
        dispatch(setSuccess());
        dispatch(setProfileDatas(ans.data));

        setTimeout(() => {
          dispatch(setLoadingUnseen());
          location.assign("/user/home_page");
        }, 2000);

        return {
          error: false,
        };
      } else {
        if (ans.information.email) {
          information += `${ans.information.email}\n`;
        }
        if (ans.information.username) {
          information += `${ans.information.username}\n`;
        }
        if (ans.information.password) {
          information += `${ans.information.password}\n`;
        }
        if (ans.information.data) {
          information += `${ans.information.data}\n`;
        }

        dispatch(setHeader("Register Fail"));
        dispatch(setBody(information));
        dispatch(setLoadingUnseen());
        dispatch(setAlertDialogSeen());

        return {
          error: true,
        };
      }
    } else {
      dispatch(setHeader("Password"));
      dispatch(setBody("Password don't match!"));
      dispatch(setAlertDialogSeen());
      return {
        error: true,
      };
    }
  } else {
    dispatch(setHeader("Data Require"));
    dispatch(setBody("You have to fill all fields"));
    dispatch(setAlertDialogSeen());
    return {
      error: true,
    };
  }
};

export default registerControl;
