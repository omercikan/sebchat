import React, { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import toast from "react-hot-toast";
import UserProfileInput from "../Utils/UserProfileInput";
import ProfileInput from "./ProfileInput";
import ProfileLabel from "./ProfileLabel";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [userPhoto, setUserPhoto] = useState<string>("");
  const [photoError, setPhotoError] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
  });

  const addUserToUsersCollection = async () => {
    if (!auth.currentUser) return;

    try {
      const docRef = doc(
        db,
        import.meta.env.REACT_APP_SECRET_HASH,
        auth.currentUser.uid
      );
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        const newUserData = {
          userId: auth.currentUser?.uid,
          userName: userInfo.name,
          userSurname: userInfo.surname,
          userEmailVerified: auth.currentUser?.emailVerified,
          timeInformation: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleTimeString("tr"),
          registeredTime: new Date(
            Timestamp.now().seconds * 1000
          ).toLocaleDateString("tr"),
          serverTime: JSON.stringify(serverTimestamp()),
        };

        await setDoc(docRef, newUserData, { merge: true });
      }
    } catch (error) {
      toast.error(
        "Dosya boyutu sunucu limitlerini aşıyor. Lütfen daha küçük bir dosya seçin."
      );
      return;
    }
  };

  const handleUpdateUser = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (user) {
        try {
          await updateProfile(user, {
            displayName: `${userInfo.name} ${userInfo.surname}`,
          });
        } catch (error) {
          toast.error(
            "Profil güncellenirken hata oluştu. Lütfen tekrar deneyin."
          );
          return;
        }
      }

      if (photoError === false) {
        await addUserToUsersCollection();
        navigate("/sohbet");
      }
    },
    [user, userInfo, navigate]
  );

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ProfileLabel key="ProfileLabelArea" userPhoto={userPhoto} />

      <div className="mt-14 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%]">
        <form className="flex flex-col gap-2" onSubmit={handleUpdateUser}>
          <UserProfileInput
            type="file"
            name="photo"
            accept="image/jpg, image/png, image/jpeg"
            id="profile-input"
            className="hidden"
            photoError={photoError}
            setPhotoError={setPhotoError}
            userPhoto={userPhoto}
            setUserPhoto={setUserPhoto}
          />

          <ProfileInput
            name="name"
            userInfo={userInfo.name}
            setUserInfo={setUserInfo}
            placeholder="Adınız (Zorunlu)"
            key="ProfileUserNameInput"
          />

          <ProfileInput
            name="surname"
            setUserInfo={setUserInfo}
            userInfo={userInfo.surname}
            placeholder="Soyadınız (İsteğe Bağlı)"
            key="ProfileUserSurnameInput"
          />

          <button
            className="bg-[#375FFF] text-[#F7F7FC] mt-16 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%] py-4 rounded-[30px] max-[350px]:px-20 disabled:bg-gray-500     
                disabled:cursor-not-allowed cursor-pointer"
            disabled={!userInfo.name || photoError}
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
