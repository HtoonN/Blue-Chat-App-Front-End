import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlockListModel } from "../../Redux/Reducer/OpenCloseReducer";
import getBlockedList from "../../Utlities/Friend/GetBlockList";
import { Box, Dialog, DialogTitle, List } from "@mui/material";
import BlockListItems from "./BlockListItems";

const BlockListModel = () => {
  const blockedList = useSelector((state) => state.userDatas.blockedList.list);
  const open = useSelector((state) => state.openClose.blockedListModel);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setBlockListModel());
  };
  useEffect(() => {
    if (open) {
      getBlockedList(dispatch);
    }
  }, [open]);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {blockedList ? (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            {activeLanguage.blockList.title}
          </DialogTitle>
          <Box
            sx={{ pt: 0 }}
            className="w-[350px] h-[500px] bg-white p-2  md:w-[400px]"
          >
            {blockedList.length ? (
              <List className=" w-full  overflow-y-scroll h-full">
                {blockedList.map((data, index) => {
                  return <BlockListItems obj={data} key={index} />;
                })}
              </List>
            ) : (
              <div className="text-gray-500 opacity-50 w-full h-full flex items-center justify-center ">
                {activeLanguage.blockList.noblockuser}
              </div>
            )}
          </Box>
        </Dialog>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BlockListModel;
