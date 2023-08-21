import axios from "axios";
import showAlertDialog from "./ShowAlertDialogFun";
import {
  setEmail,
  setProfileImage,
  setUsername,
} from "../Redux/Reducer/UserDataREducer";
import { setProfileModel } from "../Redux/Reducer/OpenCloseReducer";
import setAlertFun from "./SetAlertFun";

const updateProfile = ({
  username,
  email,
  profileImage,
  removeProfileImage,
  data,
  dispatch,
  btnDisabled,
  setUsernameP,
  setEmailP,
  setFile,
}) => {
  if (username || email || profileImage || removeProfileImage) {
    const updateObj = {};
    let isProfileImageChange = false;
    let isUpdate = false;
    let formData = new FormData();

    if (username !== data.username) {
      isUpdate = true;
      updateObj.username = username;
    }
    if (email !== data.email) {
      isUpdate = true;
      updateObj.email = email;
    }

    if (profileImage) {
      isUpdate = true;
      isProfileImageChange = true;
      formData.append("files", profileImage);
    }

    if (removeProfileImage) {
      isUpdate = true;
      updateObj.removeProfileImage = true;
    }

    if (isUpdate) {
      axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_A}/update_profile`,
        data: isProfileImageChange ? formData : {},
        params: updateObj,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            btnDisabled(false);
            setEmailP("");
            setFile("");
            setUsernameP("");
            dispatch(setProfileModel());
            if (updateObj.username) {
              dispatch(setUsername(updateObj.username));
            }

            if (updateObj.email) {
              dispatch(setEmail(updateObj.email));
            }

            if (removeProfileImage) {
              dispatch(setProfileImage(""));
            }

            if (isProfileImageChange) {
              dispatch(setProfileImage(res.data.profileImage));
            }

            setAlertFun(dispatch, "Profile update successfully!");
          }
        })
        .catch((e) => {
          showAlertDialog(dispatch, "Check your data again!", "Invalid Data");
          btnDisabled(false);
        });
    } else {
      showAlertDialog(dispatch, "No update data!", "Update Profile");
    }
  } else {
    showAlertDialog(
      dispatch,
      "Please fill the data you want to chage!",
      "Update Profile"
    );
    btnDisabled(false);
  }
};

export default updateProfile;
