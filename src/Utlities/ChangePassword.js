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
  activeLanguage,
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
            setAlertFun(
              dispatch,
              activeLanguage.profile.changePassword.alert.success.text
            );
          }
        })
        .catch((e) => {
          showAlertDialog(
            dispatch,
            e.response.data.information,
            activeLanguage.profile.changePassword.alert.title
          );
          setBtnChangePassword(false);
        });
    } else {
      showAlertDialog(
        dispatch,
        activeLanguage.profile.changePassword.alert.error.passworddonotmatch
          .text,
        activeLanguage.profile.changePassword.alert.title
      );
      setBtnChangePassword(false);
    }
  } else {
    showAlertDialog(
      dispatch,
      activeLanguage.profile.changePassword.alert.error.requirefill.text,
      activeLanguage.profile.changePassword.alert.title
    );
    setBtnChangePassword(false);
  }
};

export default changePassword;
