import React from "react";
import AddContact from "./AddContact";
import ChatList from "./ChatList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TabGroup: React.FC = () => {
  const { addContact, chatList } = useSelector(
    (state: RootState) => state.tabsSlice
  );

  return (
    <React.Fragment>
      {addContact && !chatList && <AddContact />}
      {chatList && !addContact && <ChatList />}
    </React.Fragment>
  );
};

export default TabGroup;
