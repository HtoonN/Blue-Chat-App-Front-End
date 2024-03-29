import axios from "axios";
import showAlertDialog from "./ShowAlertDialogFun";
import setAlertFun from "./SetAlertFun";
import { setGroupProfileModel } from "../Redux/Reducer/OpenCloseReducer";
import {
  setGroupName,
  setGroupProfileImage,
  setGroupType,
} from "../Redux/Reducer/UserDataREducer";

const updateGroupProfile = ({
  name,
  type,
  profileImage,
  removeProfileImage,
  groupDatas,
  dispatch,
  setBtnUpdate,
  setName,
  setType,
  setFile,
  activeLanguage,
}) => {
  if (name || type || profileImage || removeProfileImage) {
    const updateObj = {};

    let isProfileImageChange = false;
    let isUpdate = false;

    let formData = new FormData();

    if (name !== groupDatas.name) {
      isUpdate = true;
      updateObj.name = name;
    }
    if (type !== groupDatas.type) {
      isUpdate = true;
      updateObj.type = type;
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
        url: `${process.env.REACT_APP_API_A}/update_group_info/${groupDatas.groupId}`,
        data: isProfileImageChange ? formData : {},
        params: updateObj,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            setBtnUpdate(false);
            setName("");
            setType("");
            setFile("");
            if (updateObj.name) {
              dispatch(
                setGroupName({
                  groupId: groupDatas.groupId,
                  name: res.data.data[0].name,
                })
              );
            }
            if (updateObj.type) {
              dispatch(
                setGroupType({
                  groupId: groupDatas.groupId,
                  type: res.data.data[0].type,
                })
              );
            }
            if (profileImage) {
              dispatch(
                setGroupProfileImage({
                  groupId: groupDatas.groupId,
                  profileImage: res.data.data[0].profileImage,
                })
              );
            }
            if (removeProfileImage) {
              dispatch(
                setGroupProfileImage({
                  groupId: groupDatas.groupId,
                  profileImage: res.data.data[0].profileImage,
                })
              );
            }
            dispatch(setGroupProfileModel());
            setAlertFun(
              dispatch,
              activeLanguage.groupMenuBoxdetail.editgroup.alert
                .groupupdatesuccessfully
            );
          }
        })
        .catch((e) => {
          showAlertDialog(
            dispatch,
            activeLanguage.groupMenuBoxdetail.editgroup.alert.invaliddata.body,
            activeLanguage.groupMenuBoxdetail.editgroup.alert.invaliddata.title
          );
          setBtnUpdate(false);
        });
    } else {
      showAlertDialog(
        dispatch,
        activeLanguage.groupMenuBoxdetail.editgroup.alert.noupdatedata.body,
        activeLanguage.groupMenuBoxdetail.editgroup.alert.noupdatedata.title
      );
      setBtnUpdate(false);
    }
  } else {
    console.log("go");
    showAlertDialog(
      dispatch,
      activeLanguage.groupMenuBoxdetail.editgroup.alert.nodata.body,
      activeLanguage.groupMenuBoxdetail.editgroup.alert.nodata.title
    );
    setBtnUpdate(false);
  }
};

export default updateGroupProfile;
