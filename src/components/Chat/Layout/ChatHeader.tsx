import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ChatHeader: React.FC = () => {
  const { activeChatId } = useSelector((state: RootState) => state.setChatId);
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);
  const activeChat = chatList.find((chat) => chat.chatId == activeChatId);
 
  return (
    <header className="bg-[#0F1828] py-5.5">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <strong className="text-[#F7F7FC] font-medium">
            {activeChatId.length && activeChat?.userOne.userName && activeChat.userOne.userSurname ? `${activeChat?.userOne.userName} ${activeChat.userOne.userSurname}` : `${activeChat?.userOne.userName ? activeChat?.userOne.userName : ""}`}
          </strong>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
