import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./font";
//import registerServiceWorker from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

window.onbeforeunload = function (e) {
  window.onunload = function () {
    window.localStorage.removeItem("selectedId");
  };
  return undefined;
};
root.render(
  
    <App />

);

//registerServiceWorker();
