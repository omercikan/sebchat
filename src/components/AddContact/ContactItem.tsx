import React, { useCallback, useEffect } from "react";
import { UserContactList } from "../../types";
import { BsPlusCircle } from "react-icons/bs";
import { auth, db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addChatList } from "../../redux/slices/chatListSlice";
import { MdOutlineVerifiedUser } from "react-icons/md";
import ProfilPhoto from "../../assets/images/profile.png"

type ContactItemProps = {
  user: UserContactList;
};

const ContactItem: React.FC<ContactItemProps> = ({ user }) => {
  const { userProfilPhoto, userName, userSurname, registeredTime, userId } =
    user;
  const currentUserDisplayName = auth.currentUser?.displayName;
  const dispatch = useDispatch<AppDispatch>();
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);
  const chatId = userId.concat(`_${auth.currentUser?.uid}`);
  const searchInChatList = chatList.find((chat) => chat.chatId == chatId);

  const addUserToChat = useCallback(async () => {
    await addDoc(collection(db, import.meta.env.REACT_APP_SECRET_KEY), {
      chatId: chatId,
      userOneId: user.userId,
      userTwoId: auth.currentUser?.uid,
      userOne: user,
      userTwo: {
        displayName: auth.currentUser?.displayName,
        metadata: { ...auth.currentUser?.metadata },
        userId: auth.currentUser?.uid,
      },
      messages: [],
      timeInformation: new Date(
        Timestamp.now().seconds * 1000
      ).toLocaleTimeString("tr"),
      serverTime: JSON.stringify(Timestamp.fromDate(new Date())),
    });
  }, [user, chatId]);

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      where("userTwoId", "==", auth.currentUser?.uid)
    );
    onSnapshot(q, (querySnapshot) => {
      const chatList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(addChatList(chatList));
    });
  }, []);

  return (
    <li
      className="contact-item flex items-center justify-between p-2"
      title={
        userId == auth.currentUser?.uid
          ? `${currentUserDisplayName} ile sohbet etmek ister misin?`
          : `${userName} ${userSurname} ile sohbet etmek ister misin?`
      }
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
              {userId == auth.currentUser?.uid
                ? currentUserDisplayName
                : `${userName} ${userSurname}`}{" "}
              <span className="inline-flex">
                <MdOutlineVerifiedUser color={user.userEmailVerified ? "green" : "red"} />
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="registered-time-text text-[10px] mt-2 text-[#787878]">
          <span>Kayıt tarihi: {registeredTime}</span>
        </div>
      </div>

      <div className="add-user-chat">
        <button
          className="cursor-pointer text-white disabled:text-[#979797] disabled:cursor-not-allowed"
          onClick={addUserToChat}
          disabled={!!searchInChatList}
        >
          <BsPlusCircle size={22} />
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
