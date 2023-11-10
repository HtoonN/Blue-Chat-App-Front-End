import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileModel } from "../Redux/Reducer/OpenCloseReducer";
import LabelAndInputText from "./LabelAndInputText";
import changeImageStringToObj from "../Utlities/ChangeImageStringToObj";
import ChangePassword from "./ChangePassword";
import updateProfile from "../Utlities/UpdateProfile";

const Profile = () => {
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  const open = useSelector((state) => state.openClose.profileModel);

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [removeProfileImage, setRemoveProfileImage] = useState(false);
  const [btnUpdate, setBtnUpdate] = useState(false);

  const [openChangePasswored, setOpenChangePassword] = useState(false);

  const setProfileImageFun = (imgUrl) => {
    const profileImage = changeImageStringToObj(imgUrl);
    const url = `http://localhost:3001/api/v1/account/user/get_image/${profileImage.public_id}/${profileImage.version}/${profileImage.format}/${profileImage.resource_type}`;
    setImageUrl(url);
  };
  useEffect(() => {
    if (profileDatas.profileImage) {
      setProfileImageFun(profileDatas.profileImage);
    }
  }, [profileDatas.profileImage]);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setProfileModel());
  };

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {open && (
        <Dialog open={open} sx={{ zIndex: "90" }}>
          <DialogTitle
            className=" text-center text-blue-900"
            sx={{ width: { xs: "350px", md: "450px" } }}
          >
            {activeLanguage.profile.title}
          </DialogTitle>
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
            {profileDatas.profileImage ? (
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
                      setProfileImageFun(profileDatas.profileImage);
                      setRemoveProfileImage(false);
                    }}
                  >
                    {activeLanguage.profile.removephoto}
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
                    {activeLanguage.profile.removeimage}
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
                    {activeLanguage.profile.removeselected}
                  </Typography>
                )}
              </>
            )}
            <div className="mb-10" />
            <LabelAndInputText
              name={`${activeLanguage.profile.username} - \n ${profileDatas.username}`}
              value={username}
              setValue={setUsername}
            />

            <LabelAndInputText
              name={`${activeLanguage.profile.email} - \n ${profileDatas.email}`}
              value={email}
              setValue={setEmail}
            />
            <Button
              sx={{
                marginTop: "50px",
                color: "#0d47a1",
                fontWeight: "800",
              }}
              onClick={() => {
                setOpenChangePassword(true);
              }}
            >
              {activeLanguage.profile.changepassword}
            </Button>
          </div>
          <ChangePassword
            open={openChangePasswored}
            setOpen={setOpenChangePassword}
          />
          <DialogActions>
            <Button
              sx={{ color: "#0d47a1" }}
              onClick={() => {
                handleClose();
              }}
            >
              {activeLanguage.profile.cancel}
            </Button>
            <Button
              sx={{ color: "#0d47a1" }}
              onClick={() => {
                setBtnUpdate(true);
                updateProfile({
                  username,
                  email,
                  profileImage: file,
                  removeProfileImage,
                  data: profileDatas,
                  dispatch: dispatch,
                  btnDisabled: setBtnUpdate,
                  setUsernameP: setUsername,
                  setEmailP: setEmail,
                  setFile,
                });
              }}
              disabled={btnUpdate}
            >
              {activeLanguage.profile.update}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Profile;
