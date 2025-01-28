import React from "react";
import { ChatItemProps } from "../../types";
import { auth } from "../../firebaseConfig";

const ChatItem: React.FC<ChatItemProps> = ({ user }) => {
  const { message, timeInformation, userId } = user;
  const time_To_Send = `${timeInformation.split(":")[0]}:${
    timeInformation.split(":")[1]
  }`;

  return (
    <React.Fragment>
      <li className="w-full">
        <div
          className={` ${
            userId == auth.currentUser?.uid
              ? `bg-[#375FFF] float-end`
              : "bg-[#0F1828] float-left"
          } p-[10px] flex max-md:flex-col max-md:gap-0 items-end justify-between gap-5 rounded-2xl rounded-br-none ${
            message.length > 100
              ? "w-[500px] max-md:w-auto"
              : "w-max max-md:w-auto"
          }`}
        >
          <span className="text-sm break-all text-start pe-16 w-full">{message}</span>
          <span className="text-end text-[10px] text-[#F7F7FC]">
            {time_To_Send}
          </span>
        </div>
      </li>
    </React.Fragment>
  );
};

export default ChatItem;
