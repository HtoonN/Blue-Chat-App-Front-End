import { io } from "socket.io-client";

export const socket = io("http://localhost:3001", {
  transports: ["websocket", "polling", "flashsocket"],
  autoConnect: false,
  withCredentials: true,
  auth: {
    // token: localStorage.getItem("data"),
  },
});
