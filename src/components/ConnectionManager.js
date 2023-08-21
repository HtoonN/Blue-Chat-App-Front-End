import { socket } from "../socket";

const ConnectionManager = () => {
  if (localStorage.getItem("data")) {
    socket.connect();
  }
};

export default ConnectionManager;
