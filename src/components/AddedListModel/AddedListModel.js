import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddedListModel } from "../../Redux/Reducer/OpenCloseReducer";
import getAddedUsers from "../../Utlities/Friend/GetAddedUser";
import { Box, Dialog, DialogTitle, List } from "@mui/material";
import AddedListItems from "./AddedListItems";
import EmptyMessagedComponent from "../EmptyMessagedComponent";
import getAddedGroup from "../../Utlities/Group/getAddedGroups";
import AddedGRoupListItems from "./AddedGroupListItems";

const AddedListModel = () => {
  const addedListPeoples = useSelector(
    (state) => state.userDatas.addedList.list
  );
  const addedGroupList = useSelector(
    (state) => state.userDatas.addedGroupList.list
  );

  const open = useSelector((state) => state.openClose.addedListModel);
  const dispatch = useDispatch();
  const [person, setPerson] = useState(true);
  const added = useSelector((state) => state.userDatas.friendsDatas.add);

  const active = "text-blue-900  my-1 cursor-pointer ";
  const noActive =
    "text-blue-grey font-thin my-1 opacity-40 cursor-pointer active:opacity-20 ";

  const handleClose = () => {
    dispatch(setAddedListModel());
  };

  useEffect(() => {
    if (open) {
      getAddedUsers(dispatch);
      getAddedGroup(added.groups, dispatch);
    }
  }, [open]);

  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <div>
      {added && (
        <Dialog open={open} onClose={handleClose} className=" w-full h-full ">
          <DialogTitle className="w-[350px] text-center text-blue-900 md:w-[400px]">
            {activeLanguage.waitingList.title}
          </DialogTitle>
          <div className="w-full flex justify-around">
            <div className="w-full flex flex-row justify-around">
              <div
                className={person ? active : noActive}
                onClick={() => setPerson(true)}
              >
                {activeLanguage.waitingList.friend.title}:
                {added ? added.list.length : 0}
              </div>
              <div
                className={person ? noActive : active}
                onClick={() => setPerson(false)}
              >
                {activeLanguage.waitingList.group.title}:
                {added ? added.groups.length : 0}
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
                      {activeLanguage.waitingList.nowaitingaccept}
                    </div>
                  )}
                </div>
              ) : (
                <Box className="w-full h-full">
                  {addedGroupList.length ? (
                    <List className=" w-full  overflow-y-scroll h-full">
                      {addedGroupList.map((data, index) => {
                        return <AddedGRoupListItems data={data} key={index} />;
                      })}
                    </List>
                  ) : (
                    <EmptyMessagedComponent
                      message={activeLanguage.waitingList.nowaitingaccept}
                    />
                  )}
                </Box>
              )}
            </div>
          </Box>
        </Dialog>
      )}
    </div>
  );
};

export default AddedListModel;
