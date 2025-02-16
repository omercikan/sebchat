import { doc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useCallback, useRef, useState } from "react";
import { auth, db } from "../../../../firebaseConfig";
import ChatFooterButton from "./ChatFooterButton";
import ChatFooterInput from "./ChatFooterInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

type ChatFooterProps = {
  chatContainerRef: React.RefObject<HTMLDivElement | null>;
};

const ChatFooter: React.FC<ChatFooterProps> = ({ chatContainerRef }) => {
  const [message, setMessage] = useState<string>("");
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
  const { activeChatId } = useSelector((state: RootState) => state.setChatId);

  const handleAddMessage = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!auth) return;

      messageInputRef.current?.focus();

      if (message.trim().length) {
        const docRef = doc(
          db,
          import.meta.env.REACT_APP_SECRET_KEY,
          activeChatId
        );

        const chatSnap = await getDoc(docRef);
        const chatData = chatSnap.exists() ? chatSnap.data() : { messages: [] };

        const newMessage = {
          sender: {
            displayName: auth.currentUser?.displayName,
            userId: auth.currentUser?.uid,
          },
          message: message,
          timeStamp: Timestamp.now().toMillis(),
          currentTime: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleTimeString("tr"),
        };

        await updateDoc(docRef, {
          messages: [...chatData?.messages, newMessage],
          lastUpdated: Timestamp.now().toMillis(),
          timeInformation: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleTimeString("tr"),
        });

        setMessage("");

        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight;
        }
      }
    },
    [message, messageInputRef, activeChatId, db, auth]
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
