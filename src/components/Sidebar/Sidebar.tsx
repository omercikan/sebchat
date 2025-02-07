import React, { useEffect } from "react";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import SidebarItem from "./SidebarItem";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  changeAddContactState,
  changeChatListState,
} from "../../redux/slices/TabsSlice";
import { changeSidebarTab } from "../../redux/slices/SidebarActiveSlice";
import { setChatId } from "../../redux/slices/setChatIdSlice";
import ProfilePhoto from "../../assets/images/profile.png";
import { changePanelState } from "../../redux/slices/accountSettingPanel";

type SidebarProps = {
  name: string | undefined;
  surname: string | undefined;
};

const Sidebar: React.FC<SidebarProps> = ({ name, surname }) => {
  const userPhoto =
    localStorage.getItem("userPhoto") &&
    JSON.parse(localStorage.getItem("userPhoto") || "[]");
  const nameFirstChar = name?.charAt(0);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(changeSidebarTab("Ekle"));
  }, [dispatch]);

  const handleChat = () => {
    dispatch(changeSidebarTab("Sohbet"));
    dispatch(changeChatListState());
  };

  const handleAddContact = () => {
    dispatch(changeSidebarTab("Ekle"));
    dispatch(changeAddContactState());
    dispatch(setChatId(""));
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
          onClick={handleChat}
        />

        <SidebarItem
          item={<FiPlus />}
          text="Ekle"
          key={"SidebarAddUser"}
          onClick={handleAddContact}
        />

        <div className="cursor-pointer self-center max-md:self-start place-content-end max-md:ms-auto max-md:mt-2 h-full" onClick={() => dispatch(changePanelState(true))}>
          <img
            src={userPhoto ? userPhoto : ProfilePhoto}
            alt={`${name} ${surname}`}
            className="w-[35px] h-[35px] object-cover rounded-full mx-auto border-1 border-dashed border-gray-600"
          />
        </div>
      </ul>
    </React.Fragment>
  );
};

export default Sidebar;
