import React from "react";
import { IoSearch } from "react-icons/io5";
import ChatsList from "../ChatsList/ChatsList";

const ChatList: React.FC = () => {
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
          />
        </div>
      </div>

      <div className="user-contact-list mt-3">
        <ChatsList />
      </div>
    </div>
  );
};

export default ChatList;
