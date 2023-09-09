import { socket } from "../socket";

const ConnectionManager = () => {
  if (localStorage.getItem("userId")) {
    socket.connect();
  }
};

export default ConnectionManager;
