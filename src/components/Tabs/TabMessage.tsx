import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ContactImage from "../../assets/images/add-contact.png";
import ChattingImage from "../../assets/images/start-chatting.png";

const TabMessage: React.FC = () => {
  const { activeTab } = useSelector(
    (state: RootState) => state.sidebarActiveSlice
  );

  const tabMessages = {
    Sohbet:
      "💬 Sohbet listendeki kişilerle iletişime geç! Birine tıkla ve mesaj göndererek hemen sohbet başlat! 🚀",
    Ekle: "🔍 Yeni kişiler ekleyerek sohbet listeni genişlet! İsim veya soyisimle arama yap ve hemen keşfet! 🚀",
  };

  return (
    <div className="grid place-content-center h-full px-10">
      <figure>
        <img
          src={activeTab == "Ekle" ? ContactImage : ChattingImage}
          alt={tabMessages[activeTab as keyof typeof tabMessages]}
          className="w-[75px] h-[75px] mx-auto object-contain mb-5 drop-shadow drop-shadow-2xl"
        />
      </figure>

      <p className="text-[#4A90E2] text-center w-[413px]">
        {tabMessages[activeTab as keyof typeof tabMessages]}
      </p>
    </div>
  );
};

export default TabMessage;
