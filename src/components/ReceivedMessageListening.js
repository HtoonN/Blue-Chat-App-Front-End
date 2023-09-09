import React from "react";
import { useDispatch } from "react-redux";
import { socket } from "../socket";
//import setAlertFun from "../Utlities/SetAlertFun";
import notiActive from "../Utlities/NotiActive";

const ReceivedMessageListening = () => {
  const dispatch = useDispatch();

  socket.on("receive-message-from-friend", (data) => {
    if (data.data.receiver) {
      notiActive(
        dispatch,
        "Receive message from friends",
        "Message",
        data.data.sender
      );
    }
  });

  return <></>;
};

export default ReceivedMessageListening;
