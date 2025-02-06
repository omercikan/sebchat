import React, { useState } from "react";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  changeAddContactState,
  changeChatListState,
} from "../../redux/slices/TabsSlice";

type SidebarProps = {
  name: string | undefined;
};

const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  const nameFirstChar = name?.charAt(0);
  const [keyword, setKeyword] = useState<string>("Ekle");
  const dispatch = useDispatch<AppDispatch>();

  const handleChat = () => {
    setKeyword("Sohbet");
    dispatch(changeChatListState());
  };

  const handleAddContact = () => {
    setKeyword("Ekle");
    dispatch(changeAddContactState());
  };

  return (
    <React.Fragment>
      <ul className="bg-[#0A121F] h-screen max-md:h-max drop-shadow-xl shadow-[#1A2A3A] shadow-2xl max-md:shadow-none flex flex-col max-md:justify-center max-md:flex-row gap-3 py-5 max-md:py-3 px-3 max-md:fixed max-md:bottom-0 max-md:w-full max-md:z-10 max-md:bg-[#141E2E]">
        <SidebarItem
          item={nameFirstChar}
          key={"SidebarUserChar"}
          className="!bg-[#F6F5F5] shadow shadow-[#F6F5F5] !text-[#000] font-medium select-none"
        />

        <SidebarItem
          item={<HiMiniChatBubbleOvalLeftEllipsis />}
          text="Sohbet"
          key={"SidebarChat"}
          keyword={keyword}
          onClick={handleChat}
        />

        <SidebarItem
          item={<FiPlus />}
          text="Ekle"
          key={"SidebarAddUser"}
          keyword={keyword}
          onClick={handleAddContact}
        />
      </ul>
    </React.Fragment>
  );
};

export default Sidebar;
