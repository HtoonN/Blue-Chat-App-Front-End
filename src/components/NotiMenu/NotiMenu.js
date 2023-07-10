import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClickAwayListener,
  Divider,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { setNotiMenuModel } from "../../Redux/Reducer/OpenCloseReducer";
import getNotiData from "../../Utlities/getNotidata";
import MenuListItem from "./MenuListItem";
import SeeMore from "../SeeMore";
import { addMoreNotiList } from "../../Redux/Reducer/UserDataREducer";

const NotiMenu = ({ notiMenuRef }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userDatas.notiList.list);
  const open = useSelector((state) => state.openClose.notiMenuModel);
  const nextPage = useSelector((state) => state.userDatas.notiList.nextPage);

  const handleClose = () => {
    dispatch(setNotiMenuModel());
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
      <Popper
        open={open}
        anchorEl={notiMenuRef.current}
        placement="bottom-end"
        transition
        disablePortal
        sx={{ zIndex: "50" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-end" ? "left-top" : "left-bottom",
            }}
          >
            <Paper
              sx={{
                width: "350px",
                height: "500px",
                overFlowY: "scroll",
                overflowX: "hidden",
                padding: "5px",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
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
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default NotiMenu;
