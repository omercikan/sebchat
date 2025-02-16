import React, { useEffect, useState } from "react";
import { ChatListInterface } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setChatId } from "../../redux/slices/setChatIdSlice";
import ProfilPhoto from "../../assets/images/profile.png";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { addChatList } from "../../redux/slices/chatListSlice";

const ChatsItem: React.FC<{ chat: ChatListInterface }> = ({ chat }) => {
  const dispatch = useDispatch<AppDispatch>();
  const otherUser = chat.otherUser;
  const [userProfile, setUserProfile] = useState<{
    userProfilPhoto?: string;
    userName?: string;
    userSurname?: string;
  }>({
    userProfilPhoto: ProfilPhoto,
    userName: "Bilinmeyen",
    userSurname: "Kullanıcı",
  });
  const [lastMessage, setLastMessage] = useState(
    chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null
  );

  const sendTimeToMessageSplit = lastMessage?.currentTime.split(":");
  const sendTimeToMessage = sendTimeToMessageSplit
    ? `${sendTimeToMessageSplit?.[0]}:${sendTimeToMessageSplit?.[1]}`
    : "";

  useEffect(() => {
    if (!otherUser?.userId) return;

    const fetchUserProfile = async () => {
      const userRef = doc(db, import.meta.env.REACT_APP_SECRET_HASH, otherUser.userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUserProfile((prev) => ({
          ...prev,
          ...userSnap.data(),
        }));
      }
    };

    fetchUserProfile();
  }, [otherUser?.userId]);

  useEffect(() => {
    const chatRef = doc(db, import.meta.env.REACT_APP_SECRET_KEY, chat?.chatId);
    const unsubscribeChat = onSnapshot(chatRef, (chatSnapshot) => {
      if (chatSnapshot.exists()) {
        const chatData = chatSnapshot.data();
        if (chatData.messages.length > 0) {
          setLastMessage(chatData.messages[chatData.messages.length - 1]);
        }
      }
    });

    return () => unsubscribeChat();
  }, [chat?.chatId]);

  useEffect(() => {
    const q = query(
      collection(db, import.meta.env.REACT_APP_SECRET_KEY),
      orderBy("lastUpdated", "desc"),
      where("participants", "array-contains", auth?.currentUser?.uid)
    );

    const unsubscribe = onSnapshot(q, (chatSnapshot) => {
      const chatList = chatSnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      dispatch(addChatList(chatList));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleCreateChat = () => {
    const sortedUserIds = [chat.userOne.userId, chat.userTwo.userId].sort();
    const chatId = sortedUserIds.join("_");
    dispatch(setChatId(chatId));
  };

  return (
    <li
      className="contact-item flex items-center justify-between p-2 cursor-pointer py-4"
      title={lastMessage?.message}
      onClick={handleCreateChat}
    >
      <div className="flex justify-between w-full">
        <figure>
          <div
            className={`flex ${
              lastMessage?.message ? "items-center" : "items-start"
            } gap-x-3`}
          >
            <img
              src={userProfile.userProfilPhoto || ProfilPhoto}
              alt={`${userProfile.userName} ${userProfile.userSurname}`}
              className="w-[49px] h-[49px] object-cover rounded-full"
            />

            <figcaption className="text-xs text-[#f7f7fc]">
              <span className="text-[15px]">
                {userProfile.userName} {userProfile.userSurname}
              </span>
              <span className="block text-[12px] text-[#d1d7db] mt-0.5">
                {lastMessage?.message}
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="registered-time-text text-[#8696a0]">
          <time className="text-xs">{sendTimeToMessage}</time>
        </div>
      </div>
    </li>
  );
};

export default ChatsItem;
