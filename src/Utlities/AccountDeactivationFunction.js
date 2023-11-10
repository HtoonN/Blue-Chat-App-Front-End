import axios from "axios";
import showAlertDialog from "./ShowAlertDialogFun";

const accountDeactivationFun = (dispatch, password, setBtnDisabled) => {
  setBtnDisabled(true);
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_API_A}/account_deactivate`,
    data: {
      data: {
        password,
      },
    },
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("userId");
        location.assign("/login");
      }
    })
    .catch((e) => {
      setBtnDisabled(false);
      if (e.response.data.error) {
        showAlertDialog(
          dispatch,
          e.response.data.information,
          "Account Deactivation"
        );
      }
    });
};

export default accountDeactivationFun;
