import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { RiSendPlaneFill } from "react-icons/ri";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addMessage } from "../redux/chatSlice";
import ChatList from "../components/Chat/ChatList";
import ProfilePhoto from "../assets/images/profile.png";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import UserAccountSetting from "../components/User/UserAccountSetting";

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [user, isLoading] = useAuthState(auth);
  const name = user?.displayName?.split(" ")[0];
  const surname = user?.displayName?.split(" ")[1];
  const userPhoto = localStorage.getItem("userPhoto") && JSON.parse(localStorage.getItem("userPhoto") || "[]");
  const dispatch = useDispatch<AppDispatch>();
  const [panel, setPanel] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) {
      navigate("/", { replace: true })
    }
  }, [navigate, user])

  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("serverTime"));
    onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(addMessage(messages));
    });
  }, [dispatch]);

  const handleAddMessage = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(message.length) {
        await addDoc(collection(db, "chat"), {
          userId: auth.currentUser?.uid,
          message: message,
          timeInformation: new Date(Timestamp.now().seconds*1000).toLocaleTimeString("tr"),
          clientTime: new Date(Timestamp.now().seconds*1000).toLocaleDateString("tr"),
          serverTime: JSON.stringify(Timestamp.fromDate(new Date())),
        });
  
        setMessage("");
      }
      
      if(chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current?.scrollHeight
      }
    },
    [message]
  );

  useEffect(() => {
    if(chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }  
  }, [])

  if(isLoading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      <div className="main-chat-area">
        <header className="bg-[#0F1828] py-4">
          <div className="w-[90%] mx-auto">
            <div className="flex items-center justify-between">
              <strong className="text-[#F7F7FC] font-medium">
                Siz {name && surname ? `(${name} ${surname})` : `(${name})`}
              </strong>

              <div className="cursor-pointer" onClick={() => setPanel(true)}>
                <img
                  src={userPhoto ? userPhoto : ProfilePhoto}
                  alt={`${name} ${surname}`}
                  className="w-[35px] h-[35px] object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="main-chat-area bg-[#152033] py-3 max-lg:pb-20 h-[calc(100vh-137px)] scroll-smooth text-[#F7F7FC] overflow-auto" ref={chatContainerRef}>
          <div className="px-10 max-md:px-1.5">
            <ChatList />
          </div>
        </main>

        <footer className="fixed left-0 bottom-0 w-full">
          <form onSubmit={handleAddMessage}>
            <div className="w-full flex justify-center gap-5 p-3 bg-[#0F1828]">
              <input
                type="text"
                placeholder="Bir mesaj yazın"
                className="bg-[#152033] text-sm w-[100%] outline-none p-4 text-[#F7F7FC] rounded-md placeholder:text-[#F7F7FC]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="outline-none">
                <RiSendPlaneFill color="#375FFF" size={24} />
              </button>
            </div>
          </form>
        </footer>
      </div>

      {<UserAccountSetting name={name} surname={surname} panel={panel} setPanel={setPanel} />}
    </React.Fragment>
  );
};

export default memo(Chat);
