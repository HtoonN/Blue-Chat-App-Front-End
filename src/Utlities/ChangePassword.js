import axios from "axios";
import showAlertDialog from "./ShowAlertDialogFun";
import setAlertFun from "./SetAlertFun";

const changePassword = ({
  oldPassword,
  newPassword,
  reNewPassword,
  dispatch,
  handleClose,
  setBtnChangePassword,
  setOldPassword,
  setNewPassword,
  setReNewPassword,
}) => {
  if (oldPassword && newPassword && reNewPassword) {
    setBtnChangePassword(true);
    if (newPassword === reNewPassword) {
      axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_A}/change_password`,
        data: {
          data: {
            oldPassword: oldPassword,
            newPassword: newPassword,
          },
        },
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            setBtnChangePassword(false);
            setOldPassword("");
            setNewPassword("");
            setReNewPassword("");
            handleClose();
            setAlertFun(dispatch, "Password changed!");
          }
        })
        .catch((e) => {
          showAlertDialog(
            dispatch,
            e.response.data.information,
            "Change Password"
          );
          setBtnChangePassword(false);
        });
    } else {
      showAlertDialog(dispatch, "Password don't match", "Change Password");
      setBtnChangePassword(false);
    }
  } else {
    showAlertDialog(
      dispatch,
      "Fill all of three completely",
      "Change Password"
    );
    setBtnChangePassword(false);
  }
};

export default changePassword;
