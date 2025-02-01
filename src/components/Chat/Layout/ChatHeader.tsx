import React from "react";
import ProfilePhoto from "../../../assets/images/profile.png";

const userPhoto =
  localStorage.getItem("userPhoto") &&
  JSON.parse(localStorage.getItem("userPhoto") || "[]");

type ChatHeaderProps = {
  name: string | undefined;
  surname: string | undefined;
  setPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ name, surname, setPanel }) => {
  return (
    <header className="bg-[#0F1828] py-4">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <strong className="text-[#F7F7FC] font-medium">
            Siz {name && surname ? `(${name} ${surname})` : `(${name})`}
          </strong>

          <div className="cursor-pointer" onClick={() => setPanel(true)}>
            <img
              src={userPhoto ? userPhoto : ProfilePhoto}
              alt={`${name} ${surname}`}
              className="w-[35px] h-[35px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
