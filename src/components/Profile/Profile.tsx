import React, { useCallback, useEffect, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import ProfileImage from "../../assets/images/profile.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [userPhoto, setUserPhoto] = useState<string>("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
  });

  const handleSetProfile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleSetPhoto = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const image = e.target.files?.[0];

      if(image) {
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64Image = reader.result as string;
            setUserPhoto(base64Image)
        }
        reader.readAsDataURL(image);
      }
    },
    []
  );

  useEffect(() => {
    if(userPhoto) {
        localStorage.setItem("userPhoto", JSON.stringify(userPhoto));
    }
  }, [userPhoto])

  useEffect(() => {
    const storedUserPhoto = localStorage.getItem("userPhoto");
    if(storedUserPhoto) {
        setUserPhoto(JSON.parse(storedUserPhoto));
    }
  }, [])

  const handleUpdateUser = useCallback( async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(user) {
        await updateProfile(user, { displayName: `${userInfo.name} ${userInfo.surname}` })
        navigate("/sohbet")
    }

  }, [user, userInfo, navigate])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <label
        htmlFor="profile-input"
        className={`bg-[#152033] flex justify-center items-center rounded-full p-0 w-[150px] h-[150px] relative cursor-pointer`}
      >
        <img
          src={userPhoto ? userPhoto : ProfileImage}
          className={`${
            userPhoto ? "w-full h-full object-cover rounded-full" : "w-[96px]"
          } rounded-full`}
          alt="profil resmi"
        />
        <HiOutlinePlusSm
          size={22}
          className="absolute right-2 bottom-1 bg-[#F7F7FC] rounded-full p-0.5"
        />
      </label>

      <div className="mt-14 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%]">
        <form className="flex flex-col gap-2" onSubmit={handleUpdateUser}>
          <input
            type="file"
            name="photo"
            accept="image/jpg, image/png, image/jpeg"
            id="profile-input"
            className="hidden"
            onChange={handleSetPhoto}
          />

          <input
            type="text"
            name="name"
            placeholder="Adınız (Zorunlu)"
            className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
            value={userInfo.name}
            onChange={handleSetProfile}
          />

          <input
            type="text"
            name="surname"
            placeholder="Soyadınız (İsteğe Bağlı)"
            className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
            value={userInfo.surname}
            onChange={handleSetProfile}
          />

          <button 
                className="bg-[#375FFF] text-[#F7F7FC] mt-16 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%] py-4 rounded-[30px] max-[350px]:px-20 disabled:bg-gray-500     
                disabled:cursor-not-allowed"
                disabled={!userInfo.name}
            >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;