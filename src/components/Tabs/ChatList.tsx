import React, { useMemo, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ChatsList from "../ChatsList/ChatsList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ChatList: React.FC = () => {
  const [searchChat, setSearchChat] = useState<string>("");
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);

  const searchedChat = useMemo(() => {
    return chatList?.filter((chatItem) =>
      `${chatItem.userOne.userName} ${chatItem.userOne.userSurname} ${chatItem.userTwo.displayName}`
        .trim()
        .toLowerCase()
        .includes(searchChat.trim().toLowerCase())
    );
  }, [searchChat, chatList]);


  const chatsToDisplay = searchChat.length > 0 ? searchedChat : chatList;

  return (
    <div className="h-screen bg-[#0a121f] shadow shadow-[#0a121f] drop-shadow drop-shadow-2xl shadow-2xl p-3 ">
      <div className="add-contact-search">
        <div className="flex relative">
          <IoSearch
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={18}
            color="dedede"
          />

          <input
            type="text"
            placeholder="Sohbeti keşfet"
            className="bg-[#152033] p-3 ps-10 rounded-md w-full outline-none text-[#f7f7fc] placeholder:text-[#f7f7fc] text-sm"
            value={searchChat}
            onChange={(e) => setSearchChat(e.target.value)}
          />
        </div>
      </div>

      <div className="user-contact-list mt-3">
        <ChatsList searchedChat={chatsToDisplay} />
      </div>
    </div>
  );
};

export default ChatList;
