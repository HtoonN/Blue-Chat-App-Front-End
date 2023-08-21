import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import getMessagedWithFriend from "../Utlities/GetMessagesWithFriends";
import { List } from "@mui/material";
import Message from "./Message";
import SendingMessge from "./SendingMessge";
import SeeMore from "./SeeMore";
import { addPreMessages } from "../Redux/Reducer/UserDataREducer";
import { ArrowDownward } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

const MessageSession = () => {
  const messages = useSelector((state) => state.userDatas.messages.list);
  const nextPage = useSelector((state) => state.userDatas.messages.nextPage);
  const selectedUser = useSelector((state) => state.userDatas.selectedUser);

  const dispatch = useDispatch();

  const scrollRef = useRef();
  const scrollTopRef = useRef();
  const widthRef = useRef();

  const [ref, inView] = useInView({
    threshold: 1,
  });

  const scrollToBottom = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages[messages.length - 1]]);

  useEffect(() => {
    if (messages.length > 60) {
      scrollTopRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages[0]]);

  useEffect(() => {
    if (!messages.length) {
      if (selectedUser.status === "group") {
        console.log("GroupDatas");
      } else {
        getMessagedWithFriend(selectedUser.id, dispatch, 1);
      }
    }
  }, [selectedUser]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 3000);
  }, []);

  const obj = {
    path: "get_messages_with_friend",
    function: addPreMessages,
    url: `${process.env.REACT_APP_API_A}/get_messages_with_friend/${selectedUser.id}?page=${nextPage}`,
  };

  return (
    <div className="absolute w-full h-[calc(calc(100vh_-_156px)_-_120px)] top-[64px] ">
      {!inView && (
        <div
          className="absolute bottom-2 right-2 z-[100] p-2 bg-white rounded-full shadow-inner shadow-blue-800/50 cursor-pointer opacity-50 hover:drop-shadow-xl hover:opacity-100 "
          onClick={scrollToBottom}
        >
          <ArrowDownward className="text-blue-900" />
        </div>
      )}

      {messages.length ? (
        <List
          className="h-full overflow-y-scroll set-scrollbar color-scrollbar"
          ref={widthRef}
        >
          <SeeMore nextPage={nextPage} data={obj} />
          <div ref={scrollTopRef} />
          {messages.map((data, index) => {
            if (data && data._id) {
              return <Message data={data} key={index} index={index} />;
            }
          })}
          <div>
            <SendingMessge selectedUserId={selectedUser.id} />
          </div>
          <div ref={ref} className="relative bottom-0 -top-[300px] opacity-0" />
          <div ref={scrollRef} />
        </List>
      ) : (
        <EmptyMessagedComponent message="There is no messaged" />
      )}
    </div>
  );
};

export default MessageSession;
