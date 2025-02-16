import React from "react";
import { ChatItemProps } from "../../types";
import { auth } from "../../firebaseConfig";

const ChatItem: React.FC<ChatItemProps> = ({ user }) => {
  const { messages } = user;

  return (
    <React.Fragment>
      {messages.map((message, index) => {
        const isCurrentUser = message.sender.userId === auth.currentUser?.uid;
        const timeToSend = new Date(message.timeStamp).toLocaleTimeString(
          "tr",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );

        return (
          <li key={index} className="w-full">
            <div
              className={`${
                isCurrentUser
                  ? "bg-[#375FFF] float-end"
                  : "bg-[#0F1828] float-left !rounded-2xl !rounded-tl-none"
              } p-[10px] flex max-md:flex-col max-md:gap-0 items-end justify-between gap-5 rounded-2xl rounded-br-none ${
                message.message.length > 100
                  ? "w-[500px] break-all max-md:w-auto"
                  : "w-max max-md:w-auto"
              }`}
            >
              <span className="text-sm text-start max-md:pe-6 w-full">
                {message.message}
              </span>
              <span className="text-end text-[10px] whitespace-nowrap text-[#F7F7FC]">
                {timeToSend}
              </span>
            </div>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default ChatItem;