import React from "react";
import { socket } from "./socket";
import { useDispatch } from "react-redux";
import {
  setActiveUser,
  /* setFileSend,
  setReceivedFile,
  setSendingMessage,
  setSendingMessageStart, */
  pushMessage,
  setSendingFileComplete,
  deleteObjFormSendingMessageQueue,
  deleteObjFromSendingFileStatusQueue,
} from "./Redux/Reducer/UserDataREducer";
import FileDataListen from "./components/FileDataListen";

const SocketListening = () => {
  const dispatch = useDispatch();

  socket.on("testing-reply", () => {
    console.log("tested");
  });

  socket.on("user-connected-alert", (msg) => {
    console.log(msg);
  });

  socket.on("connected-to-room", (msg) => {
    console.log(msg);
  });

  socket.on("friend-online-alert", (userId) => {
    dispatch(setActiveUser({ userId: userId, status: true }));
  });

  socket.on("friend-offline-alert", (userId) => {
    dispatch(setActiveUser({ userId: userId, status: false }));
  });

  socket.on("receive-message-from-friend", (data) => {
    console.log(data);
  });

  socket.on("send-message-successful", ({ data, tempId }) => {
    dispatch(pushMessage(data));
    dispatch(deleteObjFormSendingMessageQueue({ tempId }));
    dispatch(deleteObjFromSendingFileStatusQueue({ tempId }));
  });

  socket.on("file-complete", (tempId) => {
    console.log("fileComplete", tempId);
    dispatch(setSendingFileComplete({ tempId }));
  });

  socket.on("send-file-error", (tempId) => {
    console.log("fileError ", tempId);
    // dispatch(setSendingMessageStart());
  });

  return (
    <>
      <FileDataListen />
    </>
  );
};

export default SocketListening;
