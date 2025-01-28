import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ChatItem from "./ChatItem";

const ChatList: React.FC = () => {
  const { chat } = useSelector((state: RootState) => state.chatSlice);

  return (
    <React.Fragment>
      <ul className="flex flex-col items-end gap-2">
        {chat.map((user) => (
          <ChatItem user={user} key={user.id} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ChatList;
