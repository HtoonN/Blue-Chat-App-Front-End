import { Box, Dialog, DialogTitle, Divider, MenuList } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotiMenuMobileModel } from "../../Redux/Reducer/OpenCloseReducer";
import MenuListItem from "../NotiMenu/MenuListItem";
import getNotiData from "../../Utlities/getNotidata";
import SeeMore from "../SeeMore";
import { addMoreNotiList } from "../../Redux/Reducer/UserDataREducer";

const NotiMenuMobile = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.openClose.notiMenuMobileModel);
  const data = useSelector((state) => state.userDatas.notiList.list);
  const nextPage = useSelector((state) => state.userDatas.notiList.nextPage);

  const handleClose = () => {
    dispatch(setNotiMenuMobileModel());
  };

  if (!data.length && open) {
    getNotiData(dispatch);
  }

  const obj = {
    path: "get_all_notifications",
    function: addMoreNotiList,
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <DialogTitle
          className=" text-center text-blue-900 "
          sx={{
            width: { xs: "350px", md: "400px" },
          }}
        >
          Notifications
        </DialogTitle>
        <Box
          sx={{
            width: { xs: "350px", md: "400px" },
            height: { xs: "500px", md: "600px" },
            overflowY: "scroll",
          }}
          className="set-scrollbar color-scrollbar"
        >
          {data.length ? (
            <div>
              <MenuList>
                {data.map((data, index) => {
                  return (
                    <div key={index}>
                      <MenuListItem data={data} index={index} />
                      <Divider />
                    </div>
                  );
                })}
              </MenuList>
              <SeeMore nextPage={nextPage} data={obj} />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 opacity-50">
              Notifications
            </div>
          )}
        </Box>
      </Dialog>
    </div>
  );
};

export default NotiMenuMobile;
