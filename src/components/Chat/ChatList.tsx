import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChatItem from "./ChatItem";

const ChatList: React.FC = () => {
  const { chat } = useSelector((state: RootState) => state.chatSlice)
  const { activeChatId } = useSelector((state: RootState) => state.setChatId)
  const matchedChat = chat.filter((chat) => chat.chatId == activeChatId)

  return (
    <React.Fragment>
      <ul className="flex flex-col items-end gap-2">
        {matchedChat.map((user) => (
          <ChatItem user={user} key={user.chatId} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ChatList;
