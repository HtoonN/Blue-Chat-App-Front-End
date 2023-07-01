import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
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
  const nextPage = useSelector((state) => state.userDatas.requested.nextPage);

  getRequestedUserData(dispatch, nextPage);

  return (
    <div>
      {friendRequest ? (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            Friends Request
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
