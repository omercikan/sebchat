import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { addContactList } from "../../redux/slices/userContactSlice";
import ContactItem from "./ContactItem";

const ContactList: React.FC<{ searchContactValue: string }> = ({
  searchContactValue,
}) => {
  const { userContactList } = useSelector(
    (state: RootState) => state.userContactSlice
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(addContactList(usersList));
    });
  }, []);

  const searchedContactList = useMemo(() => {
    return userContactList.filter((user) =>
      `${user.userName} ${user.userSurname}`
        .trim()
        .toLowerCase()
        .includes(searchContactValue.trim().toLowerCase())
    );
  }, [searchContactValue, userContactList]);

  return (
    <ul className="flex flex-col">
      {searchedContactList.map((user) => (
        <ContactItem user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default ContactList;
