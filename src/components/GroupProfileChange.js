import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGroupProfileModel } from "../Redux/Reducer/OpenCloseReducer";
import LabelAndInputText from "./LabelAndInputText";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import updateGroupProfile from "../Utlities/UpdateGroupProfile";

const GroupProfileChange = () => {
  const open = useSelector((state) => state.openClose.groupProfileModel);
  const groupDatas = useSelector((state) => state.userDatas.chatFriend.data);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [removeProfileImage, setRemoveProfileImage] = useState(false);
  const [btnUpdate, setBtnUpdate] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setGroupProfileModel());
  };

  const setProfileImageFun = (imgUrl) => {
    const profileImage = changeImageStringToObj(imgUrl);
    const url = `https://bluechatapp.onrender.com/api/v1/account/user/get_image/${profileImage.public_id}/${profileImage.version}/${profileImage.format}/${profileImage.resource_type}`;
    setImageUrl(url);
  };

  useEffect(() => {
    if (groupDatas.profileImage) {
      setProfileImageFun(groupDatas.profileImage);
    }
  }, [groupDatas.profileImage]);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {open && (
        <Dialog open={open}>
          <DialogTitle
            sx={{
              width: { xs: "350px", md: "450px" },
              textAlign: "center",
              fontSize: "18px",
              color: "#0d47a1",
            }}
          >
            {activeLanguage.groupMenuBoxdetail.editgroup.title}
          </DialogTitle>
          <div className="h-[450px]">
            <div className="h-[500px] w-full flex flex-col justify-start items-center">
              <div className=" flex flex-col justify-center items-center relative w-20 h-20 rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src={
                    imageUrl
                      ? imageUrl
                      : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Picture.png"
                  }
                />
                <input
                  type="file"
                  className="w-full h-full absolute opacity-0"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setImageUrl(URL.createObjectURL(e.target.files[0]));
                    setRemoveProfileImage(false);
                  }}
                />
              </div>
              {groupDatas.profileImage ? (
                <>
                  {removeProfileImage || file ? (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setFile("");
                        setProfileImageFun(groupDatas.profileImage);
                        setRemoveProfileImage(false);
                      }}
                    >
                      {activeLanguage.groupMenuBoxdetail.editgroup.restorephoto}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setFile("");
                        setImageUrl("");
                        setRemoveProfileImage(true);
                      }}
                    >
                      {activeLanguage.groupMenuBoxdetail.editgroup.removeimage}
                    </Typography>
                  )}
                </>
              ) : (
                <>
                  {file && (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setFile("");
                        setImageUrl("");
                        setRemoveProfileImage(false);
                      }}
                    >
                      {
                        activeLanguage.groupMenuBoxdetail.editgroup
                          .removeselected
                      }
                    </Typography>
                  )}
                </>
              )}
              <div className="mb-10" />
              <LabelAndInputText
                name={`${activeLanguage.groupMenuBoxdetail.editgroup.name} - \n ${groupDatas.name}`}
                value={name}
                setValue={setName}
              />

              <LabelAndInputText
                name={`${activeLanguage.groupMenuBoxdetail.editgroup.type} - \n ${groupDatas.type}`}
                value={type}
                setValue={setType}
              />
            </div>
          </div>
          <DialogActions>
            <Button sx={{ color: "#0d47a1" }} onClick={handleClose}>
              {activeLanguage.groupMenuBoxdetail.editgroup.cancel}
            </Button>
            <Button
              sx={{ color: "#0d47a1" }}
              onClick={() => {
                setBtnUpdate(true);
                updateGroupProfile({
                  name,
                  type,
                  profileImage: file,
                  removeProfileImage,
                  groupDatas,
                  dispatch,
                  setBtnUpdate,
                  setName,
                  setType,
                  setFile,
                  activeLanguage,
                });
              }}
              disabled={btnUpdate}
            >
              {activeLanguage.groupMenuBoxdetail.editgroup.update}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default GroupProfileChange;
