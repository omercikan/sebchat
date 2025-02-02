import React from "react";
import AuthInput from "../../../Utils/AuthInput";

type ChatFooterInputProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  messageInputRef: React.RefObject<HTMLInputElement | null>;
};

const ChatFooterInput: React.FC<ChatFooterInputProps> = ({
  message,
  setMessage,
  messageInputRef,
}) => {

  return (
    <AuthInput
      type="text"
      placeholder="Bir mesaj yazın"
      className="text-sm p-4 placeholder:text-[#F7F7FC]"
      value={message}
      innerRef={messageInputRef}
      onChange={(e) => setMessage(e.target.value)}
      enterKeyHint="send"
    />
  );
};

export default ChatFooterInput;
