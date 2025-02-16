import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { IoChevronBackOutline } from "react-icons/io5";
import { changeSidebarTab } from "../../../redux/slices/SidebarActiveSlice";
import { changeChatListState } from "../../../redux/slices/TabsSlice";
import { setChatId } from "../../../redux/slices/setChatIdSlice";
import { auth } from "../../../firebaseConfig";

const ChatHeader: React.FC = () => {
  const { activeChatId } = useSelector((state: RootState) => state.setChatId);
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);
  const activeChat = chatList.find((chat) => chat.chatId == activeChatId);
  const dispatch = useDispatch<AppDispatch>();

  const handleBackToChatList = () => {
    dispatch(changeSidebarTab("Sohbet"));
    dispatch(changeChatListState());
    dispatch(setChatId(""));
  };

  const userOne = `${activeChat?.userOne.userName} ${activeChat?.userOne.userSurname}`;
  const userTwo = activeChat?.userTwo.displayName;
  const againstUser = auth.currentUser?.displayName != userOne && userTwo ? userOne : userTwo;

  return (
    <header className="bg-[#0F1828] max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full h-[65px] flex flex-col justify-center">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-x-2">
          <div className="md:hidden" onClick={handleBackToChatList}>
            <IoChevronBackOutline size={22} color="#999" cursor="pointer" />
          </div>

          <strong className="text-[#F7F7FC] font-medium">
            {activeChatId.length && againstUser}
          </strong>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
