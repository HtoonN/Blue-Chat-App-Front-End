import React from "react";
import { useDispatch } from "react-redux";
import { socket } from "../socket";
import notiActive from "../Utlities/NotiActive";

const ReceiveMessageFromGoup = () => {
  const dispatch = useDispatch();

  socket.on("receive-message-from-group", ({ data }) => {
    if (data.groupId) {
      notiActive(
        dispatch,
        "Received Message from group",
        "Message",
        data.groupId
      );
    }
  });
  return <></>;
};

export default ReceiveMessageFromGoup;
