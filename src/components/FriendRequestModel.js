import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriendRequestModel } from "../Redux/Reducer/OpenCloseReducer";

import getRequestedUserData from "../Utlities/Friend/GetRequestedUserData";
import FriendRequestDialogBos from "./FriendRequestDialogBos";

const FriendRequestModel = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.openClose.friendRequestModel);

  const handleClose = () => {
    dispatch(setFriendRequestModel());
  };

  const friendRequest = useSelector((state) => state.userDatas.requested.list);

  useEffect(() => {
    if (!friendRequest && open) {
      getRequestedUserData(dispatch);
    }
  }, [open]);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {friendRequest ? (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            {activeLanguage.friendRequest.title}
          </DialogTitle>
          <FriendRequestDialogBos />
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FriendRequestModel;
