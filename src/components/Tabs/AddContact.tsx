import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import ContactList from "../AddContact/ContactList";

const AddContact: React.FC = () => {
  const [searchContact, setSearchContact] = useState<string>("");

  return (
    <div className="h-screen overflow-y-auto bg-[#0a121f] shadow shadow-[#0a121f] drop-shadow drop-shadow-2xl shadow-2xl p-3" style={{scrollbarWidth: "thin"}}>
      <div className="add-contact-search">
        <div className="flex relative">
          <IoSearch
            className="absolute left-3 top-1/2 -translate-y-1/2"
            size={18}
            color="dedede"
          />

          <input
            type="text"
            placeholder="Kişi ara"
            className="bg-[#152033] p-3 ps-10 rounded-md w-full outline-none text-[#f7f7fc] placeholder:text-[#f7f7fc] text-sm"
            onChange={(e) => setSearchContact(e.target.value)}
          />
        </div>
      </div>

      <div className="user-contact-list mt-3">
        <ContactList searchContactValue={searchContact} />
      </div>
    </div>
  );
};

export default AddContact;
