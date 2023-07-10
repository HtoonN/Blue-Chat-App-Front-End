import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddedListModel } from "../../Redux/Reducer/OpenCloseReducer";
import getAddedUsers from "../../Utlities/Friend/GetAddedUser";
import { Box, Dialog, DialogTitle, List } from "@mui/material";
import AddedListItems from "./AddedListItems";

const AddedListModel = () => {
  const addedList = useSelector((state) => state.userDatas.addedList.list);
  const open = useSelector((state) => state.openClose.addedListModel);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setAddedListModel());
  };

  useEffect(() => {
    if (open) {
      getAddedUsers(dispatch);
    }
  }, [open]);

  return (
    <div>
      {addedList ? (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            Waiting Access
          </DialogTitle>
          <Box
            sx={{ pt: 0 }}
            className="w-[350px] h-[500px] bg-white p-2 overflow-scroll md:w-[400px]"
          >
            {addedList.length ? (
              <List className=" w-full  overflow-y-scroll">
                {addedList.map((data, index) => {
                  return <AddedListItems obj={data} key={index} />;
                })}
              </List>
            ) : (
              <div className="text-gray-500 opacity-50 w-full h-full flex items-center justify-center ">
                No Waiting Accept
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

export default AddedListModel;
