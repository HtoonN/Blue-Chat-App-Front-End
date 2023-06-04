import {
  setLoadingSeen,
  setLoadingUnseen,
  setSuccess,
  setTitle,
  setUnsuccess,
} from "../Redux/Reducer/LoadingReducer";

const registerControl = ({
  username,
  password,
  email,
  rePassword,
  dispatch,
}) => {
  if (username && password && email && rePassword) {
    if (password === rePassword) {
      console.log("Sending data to data base and get result");

      dispatch(setTitle("Registering"));
      dispatch(setLoadingSeen());

      setTimeout(() => {
        dispatch(setSuccess());
        setTimeout(() => {
          dispatch(setTitle("Log In"));
          dispatch(setUnsuccess());
          setTimeout(() => {
            localStorage.setItem("auth", "true");
            dispatch(setLoadingUnseen());
            location.assign("/user/home_page");
          }, 3000);
        }, 1000);
      }, 3000);

      return {
        error: false,
        information: "Success !",
      };
    } else {
      return {
        error: true,
        header: "Password",
        information: "Password don't match!",
      };
    }
  } else {
    return {
      error: true,
      header: "Data Require",
      information: "You have to fill all fields",
    };
  }
};

export default registerControl;
