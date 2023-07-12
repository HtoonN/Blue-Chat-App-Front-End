import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddedListModel } from "../../Redux/Reducer/OpenCloseReducer";
import getAddedUsers from "../../Utlities/Friend/GetAddedUser";
import { Box, Dialog, DialogTitle, List } from "@mui/material";
import AddedListItems from "./AddedListItems";
import EmptyMessagedComponent from "../EmptyMessagedComponent";

const AddedListModel = () => {
  const addedListPeoples = useSelector(
    (state) => state.userDatas.addedList.list
  );
  const addedListGroups = [];
  const open = useSelector((state) => state.openClose.addedListModel);
  const dispatch = useDispatch();
  const [person, setPerson] = useState(true);
  const personNo = 2;
  const groupNo = 3;

  const active = "text-blue-900  my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-40 cursor-pointer active:opacity-20 ";

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
      <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
        <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
          Waiting Access
        </DialogTitle>
        <div className="w-full flex justify-around">
          <div className="w-full flex flex-row justify-around">
            <div
              className={person ? active : noActive}
              onClick={() => setPerson(true)}
            >
              Peoples:{personNo}
            </div>
            <div
              className={person ? noActive : active}
              onClick={() => setPerson(false)}
            >
              Groups:{groupNo}
            </div>
          </div>
        </div>
        <Box
          sx={{ pt: 0 }}
          className="w-[350px] h-[500px] bg-white p-2  md:w-[400px]"
        >
          <div className="w-full h-full">
            {person ? (
              <div className="w-full h-full">
                {addedListPeoples.length ? (
                  <List className=" w-full  overflow-y-scroll h-full">
                    {addedListPeoples.map((data, index) => {
                      return <AddedListItems obj={data} key={index} />;
                    })}
                  </List>
                ) : (
                  <div className="text-gray-500 opacity-50 w-full h-full flex items-center justify-center ">
                    No Waiting Accept
                  </div>
                )}
              </div>
            ) : (
              <Box className="w-full h-full">
                {addedListGroups.length ? (
                  <List className=" w-full  overflow-y-scroll h-full">
                    Groups
                  </List>
                ) : (
                  <EmptyMessagedComponent message="No Waiting Accept" />
                )}
              </Box>
            )}
          </div>
        </Box>
      </Dialog>
    </div>
  );
};

export default AddedListModel;
