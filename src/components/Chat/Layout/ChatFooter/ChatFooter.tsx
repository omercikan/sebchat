import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useCallback, useRef, useState } from "react";
import { auth, db } from "../../../../firebaseConfig";
import ChatFooterButton from "./ChatFooterButton";
import ChatFooterInput from "./ChatFooterInput";

type ChatFooterProps = {
  chatContainerRef: React.RefObject<HTMLDivElement | null>;
};

const ChatFooter: React.FC<ChatFooterProps> = ({ chatContainerRef }) => {
  const [message, setMessage] = useState<string>("");
  const messageInputRef = useRef<HTMLTextAreaElement | null>(
    null
  );

  const handleAddMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      messageInputRef.current?.focus();

      if (message.length) {
        await addDoc(collection(db, "chat"), {
          userId: auth.currentUser?.uid,
          message: message,
          timeInformation: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleTimeString("tr"),
          clientTime: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleDateString("tr"),
          serverTime: JSON.stringify(Timestamp.fromDate(new Date())),
        });

        setMessage("");

        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
        }
      }
    },
    [message]
  );

  return (
    <footer className="max-md:fixed max-md:bottom-0 w-[calc(100%)] max-md:w-full">
      <form onSubmit={handleAddMessage}>
        <div className="w-full flex justify-center gap-5 p-2 bg-[#0F1828]">
          <ChatFooterInput
            key={"ChatFooterInput"}
            message={message}
            setMessage={setMessage}
            messageInputRef={messageInputRef}
          />

          <textarea
            name="textarea"
            placeholder="Bir mesaj yazın"
            className="bg-[#152033] text-[#F7F7FC] p-2 outline-none rounded-md text-sm placeholder:text-[#F7F7FC] w-full resize-none overflow-hidden md:hidden"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={messageInputRef}
          />

          <ChatFooterButton />
        </div>
      </form>
    </footer>
  );
};

export default ChatFooter;
