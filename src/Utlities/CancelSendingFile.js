import {
  deleteObjFormSendingMessageQueue,
  deleteObjFromSendingFileStatusQueue,
} from "../Redux/Reducer/UserDataREducer";
import { socket } from "../socket";

const cancelSendingFile = (tempId, dispatch) => {
  dispatch(deleteObjFormSendingMessageQueue({ tempId }));
  dispatch(deleteObjFromSendingFileStatusQueue({ tempId }));
  socket.emit("cancel-sending-file", tempId);
};

export default cancelSendingFile;
