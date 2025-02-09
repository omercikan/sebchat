import React from "react";
import ChatList from "../ChatList";

const ChatBody: React.FC<{
  chatContainerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ chatContainerRef }) => {
  return (
    <main
      className="main-chat-area bg-[#152033] py-3 max-lg:pb-20 h-[calc(100vh-137px)] max-md:h-[calc(100vh-80px)] max-md:mt-[65px] scroll-smooth text-[#F7F7FC] overflow-auto"
      ref={chatContainerRef}
    >
      <div className="px-10 max-md:px-1.5">
        <ChatList />
      </div>
    </main>
  );
};

export default ChatBody;
