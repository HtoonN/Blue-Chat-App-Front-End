import React from "react";
import { socket } from "./socket";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
  pushMessage,
  setSendingFileComplete,
  deleteObjFormSendingMessageQueue,
  deleteObjFromSendingFileStatusQueue,
  pushMessageFriMessage,
} from "./Redux/Reducer/UserDataREducer";
import FileDataListen from "./components/FileDataListen";
import messageDelieveredAlert from "./Utlities/MessageDelieveredAlertFun";
import setSeenFun from "./Utlities/SetSeenFun";
import ReceivedMessageListening from "./components/ReceivedMessageListening";
import ReceiveMessageFromGroup from "./components/ReceiveMessageFromGoup";

const SocketListening = () => {
  const dispatch = useDispatch();

  socket.on("testing-reply", () => {
    console.log("Tested");
  });

  socket.on("user-connected-alert", (msg) => {
    console.log("Connected");
  });

  socket.on("friend-online-alert", (userId) => {
    dispatch(setActiveUser({ userId: userId, status: true }));
  });

  socket.on("friend-offline-alert", (userId) => {
    dispatch(setActiveUser({ userId: userId, status: false }));
  });

  socket.on("send-message-successful", ({ data, tempId }) => {
    dispatch(pushMessage(data));
    dispatch(deleteObjFormSendingMessageQueue({ tempId }));
    dispatch(deleteObjFromSendingFileStatusQueue({ tempId }));
  });

  socket.on("file-complete", (tempId) => {
    dispatch(setSendingFileComplete({ tempId }));
  });

  socket.on("send-file-error", (tempId) => {
    console.log("fileError ", tempId);
    dispatch(deleteObjFormSendingMessageQueue({ tempId }));
    dispatch(deleteObjFromSendingFileStatusQueue({ tempId }));
  });

  socket.on("message-delievered-alert", (msg) => {
    messageDelieveredAlert(msg, dispatch);
  });

  socket.on("message-seen-alert-friend", (msg) => {
    setSeenFun(msg, dispatch);
  });

  socket.on("message-seen-alert-group", (msg) => {
    setSeenFun(msg, dispatch);
  });

  socket.on("receive-message-from-friend", (data) => {
    if (data.data.receiver) {
      socket.emit("message-delievered", data.data);
      dispatch(pushMessageFriMessage({ data: data.data }));
    }
  });

  socket.on("connected-to-room", (msg) => {
    console.log("Connected Room");
    // console.log("cnt room");
  });

  socket.on("receive-message-from-group", ({ data }) => {
    if (data.groupId) {
      dispatch(pushMessageFriMessage({ data: data }));
    }
  });

  return (
    <>
      <FileDataListen />
      <ReceivedMessageListening />
      <ReceiveMessageFromGroup />
    </>
  );
};

export default SocketListening;
