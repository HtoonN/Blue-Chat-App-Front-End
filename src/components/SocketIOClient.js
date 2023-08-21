import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "./SocketContext";
import { socket } from "../socket";
const io = require("socket.io-client");

export const SocketIOClient = () => {
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  const auth = localStorage.getItem("data");

  /* const myio = io("http://localhost:3001", {
    transports: ["websocket", "polling", "flashsocket"],
    autoConnect: false,
    withCredentials: true,
    auth: {
      token: localStorage.getItem("data"),
    },
  }); */

  myio.on("user-connected-alert", (msg) => {
    console.log(msg);
  });

  myio.on("connected-to-room", (msg) => {
    console.log(msg);
  });

  myio.on("testing-reply", () => {
    console.log("tested");
  });

  /*  const testFun = () => {
    myio.emit("connect-to-room", profileDatas.userId.toString());
    myio.emit("testing", {});
  }; */

  return <></>;
};
