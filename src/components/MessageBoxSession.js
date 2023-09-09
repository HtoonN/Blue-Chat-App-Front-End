import React, { useEffect, useRef } from "react";
import SeeMore from "./SeeMore";
import { List } from "@mui/material";
import SendingMessge from "./SendingMessge";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { addPreMessages } from "../Redux/Reducer/UserDataREducer";
import EmptyMessagedComponent from "./EmptyMessagedComponent";
import Message from "./Message";
import MessageScrolldownFloatingButton from "./MessageScrolldownFloatingButton";
import GroupMessage from "./GroupMessage";

const MessageBoxSession = ({ selectedUser }) => {
  const nextPage = useSelector((state) => state.userDatas.messages.nextPage);
  const messages = useSelector((state) => state.userDatas.messages.list);
  const groupMembersList = useSelector(
    (state) => state.userDatas.groupMembersList.members
  );
  const profileDatas = useSelector((state) => state.userDatas.profileDatas);
  const activeLanguage = useSelector(
    (state) => state.preference.activePreference.language
  );

  const [ref, inView] = useInView({
    threshold: 1,
  });

  const [refTop, inViewTop] = useInView({
    threshold: 1,
  });

  const scrollRef = useRef();
  const scrollTopRef = useRef();
  const widthRef = useRef();

  //function for scroll to down
  const scrollToBottom = () => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  //scroll to down when new mssage reach or send
  useEffect(() => {
    if (messages[messages.length - 1]?.receiver === selectedUser.id || inView) {
      scrollToBottom();
    }
  }, [messages[messages.length - 1]?._id]);

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser]);

  //Scroll to top after previous message  loaded
  useEffect(() => {
    if (inViewTop && messages?.length > 59) {
      scrollTopRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToBottom();
    }
  }, [messages[0]]);

  //obj to get previous messages
  const objForFriend = {
    path: "get_messages_with_friend",
    function: addPreMessages,
    url: `${process.env.REACT_APP_API_A}/get_messages_with_friend/${selectedUser.id}?page=${nextPage}`,
  };

  const objForGroup = {
    path: "get_group_message",
    function: addPreMessages,
    url: `${process.env.REACT_APP_API_A}/get_group_message/${selectedUser.id}/${nextPage}`,
  };

  return (
    <div className="w-full h-full">
      {messages.length ? (
        <div className="w-full h-full ">
          {/* Scrolldown Button */}
          {messages.length > 10 && (
            <MessageScrolldownFloatingButton
              display={inView}
              actionFun={scrollToBottom}
            />
          )}
          <List
            className="h-full overflow-y-scroll set-scrollbar color-scrollbar"
            ref={widthRef}
          >
            <SeeMore
              nextPage={nextPage}
              data={
                selectedUser.status === "group" ? objForGroup : objForFriend
              }
            />
            <div ref={scrollTopRef} />
            <div ref={refTop} />
            <div>
              {selectedUser.status === "group" ? (
                <>
                  {messages.map((data, index) => {
                    let memberData;
                    if (data && data._id) {
                      if (data.sender !== profileDatas.userId) {
                        let get = false;
                        let i = 0;
                        while (!get && groupMembersList.length > i) {
                          if (groupMembersList[i].userId === data.sender) {
                            get = true;
                            memberData = groupMembersList[i];
                          } else {
                            i++;
                          }
                        }
                      }
                      return (
                        <GroupMessage
                          data={data}
                          key={index}
                          index={index}
                          memberData={memberData}
                        />
                      );
                    }
                  })}
                </>
              ) : (
                <>
                  {messages.map((data, index) => {
                    if (data && data._id) {
                      return <Message data={data} key={index} index={index} />;
                    }
                  })}
                </>
              )}
            </div>

            <div>
              {/* Sending Messages.... */}
              <SendingMessge selectedUserId={selectedUser.id} />
            </div>
            {/* To show scrollDownbutton */}
            <div
              ref={ref}
              className="relative bottom-0 -top-[100px] bg-red-500 opacity-0"
            />
            {/* Scroll to down */}

            <div ref={scrollRef} />
          </List>
        </div>
      ) : (
        <EmptyMessagedComponent message={activeLanguage.message.nomessage} />
      )}
    </div>
  );
};

export default MessageBoxSession;
