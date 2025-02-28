import React, { useCallback, useEffect } from "react";
import { UserContactList } from "../../types";
import { BsPlusCircle } from "react-icons/bs";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  Timestamp,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addChatList } from "../../redux/slices/chatListSlice";
import { MdOutlineVerifiedUser } from "react-icons/md";
import ProfilPhoto from "../../assets/images/profile.png";
import { changeVerificationModal } from "../../redux/slices/emailVerificationSlice";
import toast from "react-hot-toast";

type ContactItemProps = {
  user: UserContactList;
};

const ContactItem: React.FC<ContactItemProps> = ({ user }) => {
  const {
    userProfilPhoto,
    userName,
    userSurname,
    registeredTime,
    userId,
    admin,
  } = user;
  const currentUserDisplayName = auth.currentUser?.displayName;
  const dispatch = useDispatch<AppDispatch>();
  const { chatList } = useSelector((state: RootState) => state.chatListSlice);
  const chatId = [userId, auth.currentUser?.uid].sort().join("_");
  const searchInChatList = chatList.find((chat) => chat.chatId === chatId);
  const currentUser = auth.currentUser;

  const addUserToChat = useCallback(async () => {
    if (!currentUser || !user) return;

    if (!user.userEmailVerified) {
      toast.error(
        `${user.userName} ${user.userSurname} kullanıcısının hesabı onaylı olmadığı için ekleyemezsiniz!`
      );
      return;
    }

    if (!auth.currentUser?.emailVerified) {
      dispatch(changeVerificationModal(true));
      return;
    } else {
      toast.success(`${user.userName} ${user.userSurname} başarıyla eklendi.`);
    }

    const docRef = doc(db, import.meta.env.REACT_APP_SECRET_KEY, chatId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const newChatData = {
        chatId,
        userOneDisplayName: `${user.userName} ${user.userSurname}`,
        userOne: user,
        userTwo: {
          displayName: auth.currentUser?.displayName,
          metadata: { ...auth.currentUser?.metadata },
          userId: auth.currentUser?.uid,
        },
        userOneId: user.userId,
        userTwoId: currentUser?.uid,
        participants: [currentUser?.uid, user.userId],
        messages: [],
        lastUpdated: Timestamp.now().toMillis(),
        createdAt: Timestamp.now().toDate().toString(),
      };

      await setDoc(docRef, newChatData, { merge: true });

      const userOneChatRef = doc(
        db,
        "users",
        currentUser?.uid,
        "chats",
        chatId
      );
      const userTwoChatRef = doc(
        db,
        import.meta.env.REACT_APP_SECRET_HASH,
        user.userId,
        "chats",
        chatId
      );

      await Promise.all([
        setDoc(userOneChatRef, newChatData, { merge: true }),
        setDoc(userTwoChatRef, newChatData, { merge: true }),
      ]);
    }
  }, [currentUser, user, chatId, db]);

  useEffect(() => {
    if (!auth?.currentUser) return;

    const q = query(
      collection(db, import.meta.env.REACT_APP_SECRET_KEY),
      where("participants", "array-contains", auth?.currentUser?.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const otherUser =
          data.userOneId === auth.currentUser?.uid
            ? data.userTwo
            : data.userOne;

        return {
          id: doc.id,
          chatId: data.chatId,
          otherUser,
          messages: data.messages,
          ...data,
        };
      });

      dispatch(addChatList(chatList));
    });

    return () => unsubscribe();
  }, [auth.currentUser, dispatch]);

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
              className={`w-[40px] h-[40px] object-cover rounded-full ${
                ProfilPhoto && "border border-gray-500 border-dotted"
              }`}
            />

            <figcaption
              className={`text-xs text-[#f7f7fc] ${admin && "!text-[#fff]"}`}
            >
              {admin && (
                <span className="text-[#D32F2F] text-xs block">
                  {admin && "Admin"}
                </span>
              )}
              {userId == auth.currentUser?.uid
                ? currentUserDisplayName
                : `${userName} ${userSurname}`}{" "}
              <span className="inline-flex">
                <MdOutlineVerifiedUser
                  color={user.userEmailVerified ? "green" : "red"}
                />
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
