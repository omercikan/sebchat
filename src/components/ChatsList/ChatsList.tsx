import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import ChatsItem from "./ChatsItem";
import { Button } from "@mui/material";
import { changeAddContactState } from "../../redux/slices/TabsSlice";
import { changeSidebarTab } from "../../redux/slices/SidebarActiveSlice";
import { ChatListInterface } from "../../types";

type ChatsListProps = {
  searchedChat: ChatListInterface[];
};

const ChatsList: React.FC<ChatsListProps> = ({ searchedChat }) => {
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenChatList = () => {
    dispatch(changeAddContactState());
    dispatch(changeSidebarTab("Ekle"));
  };

  return (
    <ul>
      {chatList.length > 0 ? (
        searchedChat.map((chat) => <ChatsItem chat={chat} key={chat.chatId}/>)
      ) : (
        <div className="h-[calc(100vh-85px)] flex flex-col items-center justify-center text-center select-none">
          <p className="text-[#A3B1C6]">
            Henüz sohbetinizde kimse yok. İlk mesajınızı göndererek sohbeti
            başlatın!
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0078FF",
              marginTop: "1rem",
              fontWeight: "400",
              "&:hover": { backgroundColor: "#005FCC" },
              transition: ".3s ease",
              textTransform: "capitalize",
            }}
            onClick={handleOpenChatList}
          >
            Sohbeti Başlat
          </Button>
        </div>
      )}
    </ul>
  );
};

export default ChatsList;
