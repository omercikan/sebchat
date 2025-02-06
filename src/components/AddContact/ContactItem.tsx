import React from "react";
import { UserContactList } from "../../types";
import { BsPlusCircle } from "react-icons/bs";

type ContactItemProps = {
  user: UserContactList;
};

const ContactItem: React.FC<ContactItemProps> = ({ user }) => {
  const { userProfilPhoto, userName, userSurname, registeredTime, userId } = user;

  return (
    <li className="contact-item flex items-center justify-between p-2" title={`${userName} ${userSurname} ile sohbet etmek ister misin?`}>
      <div>
        <figure>
          <div className="flex items-center gap-x-3">
            <img
              src={userProfilPhoto}
              alt={`${userName} ${userSurname}`}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />

            <figcaption className="text-xs text-[#f7f7fc]">
              {userName} {userSurname}
            </figcaption>
          </div>
        </figure>

        <div className="registered-time-text text-[10px] mt-2 text-[#787878]">
          <span>Kayıt tarihi: {registeredTime}</span>
        </div>
      </div>

      <div className="add-user-chat">
        <button className="cursor-pointer">
          <BsPlusCircle size={22} color="fff" />
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
