import { Box, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFindFriendsModel } from "../Redux/Reducer/OpenCloseReducer";

const FindFriendModel = () => {
  const open = useSelector((state) => state.openClose.findFriendsModel);
  const findFriendsData = useSelector(
    (state) => state.dataReducer.findFriendsData
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setFindFriendsModel());
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
        <DialogTitle className="w-[350px] text-center">
          Get People List
        </DialogTitle>
        <Box
          sx={{ pt: 0 }}
          className="w-[350px] h-[500px] bg-white p-2 overflow-scroll"
        >
          {findFriendsData === "searching" ? (
            <div>searching</div>
          ) : (
            <div>Datas</div>
          )}
          <div>Hello You should click!</div>
        </Box>
      </Dialog>
    </div>
  );
};

export default FindFriendModel;
