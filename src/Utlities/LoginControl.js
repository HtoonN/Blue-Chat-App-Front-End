import {
  setLoadingSeen,
  setSuccess,
  setTitle,
} from "../Redux/Reducer/LoadingReducer";

const loginControl = ({ email, password, dispatch }) => {
  if (email && password) {
    dispatch(setTitle("Logging in"));
    dispatch(setLoadingSeen());

    setTimeout(() => {
      dispatch(setSuccess());
      setTimeout(() => {
        location.assign("user/home_page");
      }, 2000);
    }, 3000);

    return {
      error: false,
    };
  } else {
    return {
      error: true,
      header: "Require datas",
      information: "Enter username and password !",
    };
  }
};

export default loginControl;
