import { setSentingFileReceivedSize } from "../Redux/Reducer/UserDataREducer";
import { socket } from "../socket";

const sendChunk = ({ sendingMessageQueue, dispatch, receivedSize }) => {
  if (sendingMessageQueue) {
    if (sendingMessageQueue.buffer && receivedSize >= 0) {
      let getBuffer = sendingMessageQueue.buffer;
      let chunk = getBuffer.slice(receivedSize, receivedSize + 1024);

      if (chunk) {
        socket.emit("file-data", {
          buffer: chunk,
          tempId: sendingMessageQueue.tempId,
          receivedSize,
        });

        dispatch(
          setSentingFileReceivedSize({
            tempId: sendingMessageQueue.tempId,
            receivedSize,
          })
        );
      }
    }
  }
};
export default sendChunk;
