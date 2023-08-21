import { AttachFile, Close, Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import sendingMessageController from "../Utlities/SendingMessageControl";
import { useDispatch, useSelector } from "react-redux";

const TypeMessageSession = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [filetype, setFileType] = useState("");
  const [l, setl] = useState("");
  const [buffer, setBuffer] = useState("");

  const dispatch = useDispatch();

  const receiverData = useSelector((state) => state.userDatas.chatFriend.data);

  const fileOnChangeController = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileUrl(URL.createObjectURL(e.target.files[0]));
      setFileType(e.target.files[0].type.toString().split("/")[0]);

      let reader = new FileReader();

      reader.onload = () => {
        const prebuffer = reader.result.toString().split(",")[1];
        setBuffer(prebuffer);
        setl(prebuffer.length);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const sendController = () => {
    sendingMessageController({ text, file, receiverData, l, buffer, dispatch });
  };

  return (
    <div>
      <Box
        className="absolute bottom-0 h-14 border-t-2 w-full  flex 
        items-center"
        sx={{
          paddingLeft: { sm: "10px" },
          justifyItems: { xs: "center", md: "start" },
        }}
      >
        <IconButton className="relative overflow-hidden ">
          <input
            type="file"
            className="absolute w-10 h-10 opacity-0"
            onChange={(e) => fileOnChangeController(e)}
          />
          <AttachFile className="text-blue-900" />
        </IconButton>
        <textarea
          placeholder="Enter Message"
          className="h-10 px-2 py-[5px] border-2 border-blue-900 rounded-md 
          focus:outline-none resize-none w-96 ml-4 mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (window.innerWidth > 900) {
                event.preventDefault();
                if (text) {
                  sendController();
                }
              }
            }
          }}
        />
        <IconButton onClick={sendController}>
          <Send className="text-blue-900" />
        </IconButton>
        {fileUrl && (
          <Box
            className="absolute -top-[150%] w-20  h-20 rounded-lg left-0 border-2 border-blue-900
           overflow-hidden"
          >
            <button
              className="absolute text-white bg-red-800 rounded-lg right-0 
              active:bg-white active:text-red-800 z-10"
              onClick={() => {
                setFileUrl("");
                setFile("");
              }}
            >
              <Close />
            </button>
            {filetype === "video" && (
              <video src={fileUrl} className=" w-full  h-full object-cover " />
            )}
            {filetype === "image" && (
              <img
                src={fileUrl}
                alt="File not found"
                className=" w-full  h-full object-cover "
              />
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TypeMessageSession;
