import React from "react";
import { chatListInterface } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setChatId } from "../../redux/slices/setChatIdSlice";
import ProfilPhoto from "../../assets/images/profile.png"

const ChatsItem: React.FC<{ chat: chatListInterface }> = ({ chat }) => {
  const { userProfilPhoto, userName, userSurname } = chat.userOne;
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateChat = () => {
    const chatId = chat.userOne.userId.concat(`_${chat.userTwo.userId}`);
    dispatch(setChatId(chatId));
  };

  return (
    <li
      className="contact-item flex items-center justify-between p-2 cursor-pointer py-4"
      title={`${userName} ${userSurname}`}
      onClick={handleCreateChat}
    >
      <div>
        <figure>
          <div className="flex items-center gap-x-3">
            <img
              src={userProfilPhoto ? userProfilPhoto : ProfilPhoto}
              alt={`${userName} ${userSurname}`}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />

            <figcaption className="text-xs text-[#f7f7fc]">
              {userName} {userSurname}
            </figcaption>
          </div>
        </figure>
      </div>
    </li>
  );
};

export default ChatsItem;
