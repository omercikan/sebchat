import React, { memo, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { addMessage } from "../redux/slices/chatSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import UserAccountSetting from "../components/User/AccountSetting/UserAccountSetting";
import ChatHeader from "../components/Chat/Layout/ChatHeader";
import ChatBody from "../components/Chat/Layout/ChatBody";
import ChatFooter from "../components/Chat/Layout/ChatFooter/ChatFooter";
import Sidebar from "../components/Sidebar/Sidebar";
import TabGroup from "../components/Tabs/TabGroup";
import { changeAddContactState } from "../redux/slices/TabsSlice";
import TabMessage from "../components/Tabs/TabMessage";

const Chat: React.FC = () => {
  const [user, isLoading] = useAuthState(auth);
  const name = user?.displayName?.split(" ")[0];
  const surname = user?.displayName?.split(" ")[1];
  const dispatch = useDispatch<AppDispatch>();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { activeChatId } = useSelector((state: RootState) => state.setChatId);
  const { chatList } = useSelector((state: RootState) => state.tabsSlice);
  const { activeTab } = useSelector(
    (state: RootState) => state.sidebarActiveSlice
  );

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);

  useEffect(() => {
    if (!auth?.currentUser?.uid) return;

    const q = query(
      collection(db, import.meta.env.REACT_APP_SECRET_KEY),
      where("participants", "array-contains", auth?.currentUser?.uid),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(addMessage(messages));
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    dispatch(changeAddContactState());
  }, []);

  return (
    <React.Fragment>
      <div className="flex max-md:flex-col">
        <div className="z-20">
          <Sidebar name={name} surname={surname} />
        </div>

        {activeChatId?.length > 0 && chatList && (
          <div
            className={`main-chat-area flex flex-col flex-[75%] ${
              activeTab == "Ekle" ? "z-0" : "z-30"
            }`}
          >
            <ChatHeader key={"ChatHeader"} />

            <ChatBody chatContainerRef={chatContainerRef} key={"ChatBody"} />

            <ChatFooter
              chatContainerRef={chatContainerRef}
              key={"ChatFooter"}
            />
          </div>
        )}

        {!activeChatId && (
          <div className="flex-[75%] max-lg:flex-[60%]">
            <TabMessage />
          </div>
        )}

        <div className="flex-[25%] max-lg:flex-[40%] max-md:fixed max-md:right-0 max-md:top-0 max-md:w-full z-10">
          <TabGroup />
        </div>
      </div>

      <UserAccountSetting name={name} surname={surname} />
    </React.Fragment>
  );
};

export default memo(Chat);
