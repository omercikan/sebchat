import React, { memo, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addMessage } from "../redux/chatSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import UserAccountSetting from "../components/User/UserAccountSetting";
import ChatHeader from "../components/Chat/Layout/ChatHeader";
import ChatBody from "../components/Chat/Layout/ChatBody";
import ChatFooter from "../components/Chat/Layout/ChatFooter/ChatFooter";

const Chat: React.FC = () => {
  const [user, isLoading] = useAuthState(auth);
  const name = user?.displayName?.split(" ")[0];
  const surname = user?.displayName?.split(" ")[1];
  const dispatch = useDispatch<AppDispatch>();
  const [panel, setPanel] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  console.log(user)

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatContainerRef]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="main-chat-area">
        <ChatHeader
          name={name}
          surname={surname}
          setPanel={setPanel}
          key={"ChatHeader"}
        />

        <ChatBody chatContainerRef={chatContainerRef} key={"ChatBody"} />

        <ChatFooter chatContainerRef={chatContainerRef} key={"ChatFooter"} />
      </div>

      <UserAccountSetting
        name={name}
        surname={surname}
        panel={panel}
        setPanel={setPanel}
      />
    </React.Fragment>
  );
};

export default memo(Chat);
