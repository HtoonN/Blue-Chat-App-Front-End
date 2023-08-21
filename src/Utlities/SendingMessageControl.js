import { setScroll } from "../Redux/Reducer/OpenCloseReducer";
import {
  pushMessage,
  setSendingFileStatusQueue,
  setSendingMessageQueue,
} from "../Redux/Reducer/UserDataREducer";
import { socket } from "../socket";
import tempId from "./TempId";
const sendingMessageController = ({
  text,
  file,
  receiverData,
  l,
  buffer,
  dispatch,
}) => {
  if (text || file) {
    if (file) {
      const sendMessageObj = { text: " " };
      sendMessageObj.tempId = tempId();

      if (receiverData.groupId) {
        sendMessageObj.type = "GM";
        sendMessageObj.receiver = receiverData.groupId;
      }

      sendMessageObj.attachFiles = {
        extension: file.type.split("/")[1],
        name: file.name,
        type: file.type.split("/")[0],
        numFiles: 1,
        length: l,
        size: file.size,
      };

      if (receiverData.userId) {
        sendMessageObj.type = "PM";
        sendMessageObj.receiver = receiverData.userId;
      }

      if (text) {
        sendMessageObj.text = text;
      }

      console.log(sendMessageObj);
      dispatch(pushMessage(sendMessageObj));
      dispatch(
        setSendingMessageQueue({
          ...sendMessageObj,
          buffer,
        })
      );
      dispatch(
        setSendingFileStatusQueue({
          tempId: sendMessageObj.tempId,
          receiver: sendMessageObj.receiver,
          length: sendMessageObj.attachFiles.length,
          receivedSize: 0,
          fileSend: false,
          senting: false,
        })
      );
      //setForSendingMessage(file);
      socket.emit("message", sendMessageObj);
      dispatch(setScroll);
    } else {
      const sendMessageObj = { text: " " };
      sendMessageObj.tempId = tempId();

      if (receiverData.groupId) {
        sendMessageObj.type = "GM";
        sendMessageObj.receiver = receiverData.groupId;
      }

      if (receiverData.userId) {
        sendMessageObj.type = "PM";
        sendMessageObj.receiver = receiverData.userId;
      }

      if (text) {
        sendMessageObj.text = text;
      }

      //console.log(sendMessageObj);
      //dispatch(setSendingMessageQueue(sendMessageObj))
      //setForSendingMessage(file);
      dispatch(pushMessage(sendMessageObj));
      dispatch(
        setSendingFileStatusQueue({
          tempId: sendMessageObj.tempId,
          receiver: sendMessageObj.receiver,
          senting: true,
        })
      );

      socket.emit("message", sendMessageObj);
      dispatch(setScroll);
    }
  } else {
    console.log("Type Datas");
  }
};

export default sendingMessageController;
