import { io } from "socket.io-client";

export const socket = io("https://bluechatapp.onrender.com", {
  transports: ["websocket", "polling", "flashsocket"],
  autoConnect: false,
  withCredentials: true,
  auth: {
    // token: localStorage.getItem("data"),
  },
});
