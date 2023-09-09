import { socket } from "../socket";

const joinToGroupRoom = (groups) => {
  if (groups.length) {
    groups.map((data) => {
      socket.emit("connect-to-room", data.id);
    });
  }
};

export default joinToGroupRoom;
