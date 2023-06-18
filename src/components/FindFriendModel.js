import { Box, Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFindFriendsModel } from "../Redux/Reducer/OpenCloseReducer";
import LoadingCircle from "./LoadingCircle";
import FriendMenu from "./FriendMenu";
import GroupMenu from "./GroupMenu";

const FindFriendModel = () => {
  const open = useSelector((state) => state.openClose.findFriendsModel);
  const findFriendsData = useSelector(
    (state) => state.dataReducer.findFriendsData
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setFindFriendsModel());
  };

  const [showMode, setShowMode] = useState("friends");

  const active = "text-blue-900  my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-40 cursor-pointer active:opacity-20 ";

  const friendNo = findFriendsData.friends ? findFriendsData.friends.no : 0;
  const groupNo = findFriendsData.groups ? findFriendsData.groups.no : 0;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
        <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
          Search Result
        </DialogTitle>
        <Box
          sx={{ pt: 0 }}
          className="w-[350px] h-[500px] bg-white p-2 overflow-scroll md:w-[400px]"
        >
          <div className="w-full flex justify-around">
            <div className="w-full flex flex-row justify-around">
              <div
                className={showMode === "friends" ? active : noActive}
                onClick={() => setShowMode("friends")}
              >
                Peoples:{friendNo}
              </div>
              <div
                className={showMode === "groups" ? active : noActive}
                onClick={() => setShowMode("groups")}
              >
                Groups:{groupNo}
              </div>
            </div>
          </div>
          <div className="w-full h-[calc(100%_-_32px)] flex flex-col justify-start items-center">
            {findFriendsData === "searching" ? (
              <div className="pt-24">
                <LoadingCircle />
              </div>
            ) : (
              <div className="w-full h-full">
                <FriendMenu mode={showMode} />
                <GroupMenu mode={showMode} />
              </div>
            )}
          </div>
        </Box>
      </Dialog>
    </div>
  );
};

export default FindFriendModel;
