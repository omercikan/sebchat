import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const ChatFooterButton: React.FC = () => {
  return (
    <button type="submit" className="outline-none">
      <RiSendPlaneFill color="#375FFF" size={24} cursor="pointer" />
    </button>
  );
};

export default ChatFooterButton;
