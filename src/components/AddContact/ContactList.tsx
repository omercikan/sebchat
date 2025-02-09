import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { addContactList } from "../../redux/slices/userContactSlice";
import ContactItem from "./ContactItem";

const ContactList: React.FC<{ searchContactValue: string }> = ({
  searchContactValue,
}) => {
  const { userContactList } = useSelector(
    (state: RootState) => state.userContactSlice
  );
  const dispatch = useDispatch<AppDispatch>();
  const filteredUsersList = userContactList.filter(
    (user) => user.userId !== auth.currentUser?.uid
  );

  useEffect(() => {
    const q = query(collection(db, import.meta.env.REACT_APP_SECRET_HASH));
    onSnapshot(q, (querySnapshot) => {
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(addContactList(usersList));
    });
  }, []);

  const searchedContactList = useMemo(() => {
    return filteredUsersList.filter((user) =>
      `${user.userName} ${user.userSurname}`
        .trim()
        .toLowerCase()
        .includes(searchContactValue.trim().toLowerCase())
    );
  }, [searchContactValue, userContactList]);

  if (searchedContactList.length === 0) {
    return (
      <div className="h-[calc(100vh-85px)] flex flex-col items-center justify-center text-center select-none text-[#A3B1C6]">
        <h1 className="mb-4">🔍 Kullanıcı bulunamadı!</h1>
        <p>
          Aradığınız kriterlere uygun bir kullanıcı listede yer almıyor.
          Bilgileri kontrol ederek tekrar deneyebilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col">
      {filteredUsersList.length > 0 ? (
        searchedContactList.map((user) => (
          <ContactItem user={user} key={user.id} />
        ))
      ) : (
        <div className="h-[calc(100vh-85px)] flex flex-col items-center justify-center text-center select-none">
          <p className="text-[#A3B1C6]">
            Şu an burada kimse yok! Sisteme yeni kullanıcılar kaydolduğunda
            onları buradan ekleyebilirsin.
          </p>
        </div>
      )}
    </ul>
  );
};

export default ContactList;
