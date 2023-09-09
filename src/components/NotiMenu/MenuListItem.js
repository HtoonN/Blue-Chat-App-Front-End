import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import setNotiSeen from "../../Utlities/SetNotiSeen";
import { useDispatch, useSelector } from "react-redux";

const MenuListItem = ({ data, index }) => {
  const dispatch = useDispatch();
  const [expend, setExpend] = useState(false);

  function clickControl() {
    setExpend((a) => !a);
    if (!data.seen) {
      setNotiSeen(index, data._id, dispatch);
    }
  }
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  return (
    <Box
      onClick={clickControl}
      sx={{
        marginBottom: "2px",
        padding: "15px",
        cursor: "pointer",
        borderRadius: "2px",
      }}
      className="hover:bg-gray-100 active:bg-gray-200"
    >
      <Box>
        <Typography
          sx={{
            marginBottom: "2px",
            fontSize: { xs: "14px", md: "16px" },
            fontWeith: "500",
          }}
        >
          {data.header}
        </Typography>
        <div>
          {expend ? (
            <p className="opacity-90 font-light text-sm text-justify w-full">
              {data.text}
            </p>
          ) : (
            <></>
          )}
        </div>

        {!data.seen && (
          <div className="font-bold mt-1 text-[10px] text-blue-900">
            {activeLanguage.notification.unread}
          </div>
        )}
      </Box>
    </Box>
  );
};

export default MenuListItem;
