import React from "react";
import { socket } from "../socket";
import { useDispatch, useSelector } from "react-redux";
import sendChunk from "../Utlities/SendChunk";

const FileDataListen = () => {
  const sendingMessageQueue = useSelector(
    (state) => state.userDatas.sendingMessageQueue
  );

  const dispatch = useDispatch();

  socket.on("request-more-data", ({ receiveDataSize, tempId }) => {
    if (sendingMessageQueue[tempId]) {
      sendChunk({
        sendingMessageQueue: sendingMessageQueue[tempId],
        receivedSize: receiveDataSize,
        dispatch,
      });
    }
  });
  return <></>;
};

export default FileDataListen;
