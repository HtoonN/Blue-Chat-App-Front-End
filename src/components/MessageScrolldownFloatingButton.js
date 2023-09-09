import { ArrowDownward } from "@mui/icons-material";
import React from "react";

const MessageScrolldownFloatingButton = ({ display, actionFun }) => {
  return (
    <div
      className={`absolute bottom-2 right-[50%] transform translate-x-[50%] z-[20]  bg-blue-900 rounded-full shadow-inner shadow-white/50 cursor-pointer opacity-50 hover:drop-shadow-xl hover:opacity-100 ${
        display ? "hidden" : "block"
      }`}
      onClick={actionFun}
    >
      <ArrowDownward className="text-white p-1" />
    </div>
  );
};

export default MessageScrolldownFloatingButton;
