import React from "react";
import { FaCamera } from "react-icons/fa";
import ProfileImage from "../../../../assets/images/profile.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebaseConfig";

const UploadLabel: React.FC<{ userPhoto: string }> = ({ userPhoto }) => {
  const [user] = useAuthState(auth);

  const userPhotoStorage =
    localStorage.getItem("userPhoto") &&
    JSON.parse(localStorage.getItem("userPhoto") || "[]");

  return (
    <label htmlFor="userAccountUploadPhoto" className="cursor-pointer">
      {userPhoto && (
        <img
          src={userPhotoStorage?.length ? userPhotoStorage : ProfileImage}
          alt={`${user?.displayName?.trim()}`}
          className={`rounded-full mx-auto w-full h-full object-cover opacity-50 border-[2px] border-dashed border-[#fff] ${
            !userPhotoStorage?.length && "p-3"
          }`}
          style={{
            backgroundImage: userPhotoStorage?.length
              ? "linear-gradient(rgba(255, 255, 255, .3), rgba(0, 0, 0, .3))"
              : "",
          }}
        />
      )}

      {!userPhoto && (
        <img
          src={ProfileImage}
          alt="profil"
          className="rounded-full mx-auto w-full p-4 h-full object-cover opacity-50 border-[2px] border-dashed border-[#fff]"
        />
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <FaCamera className="mx-auto mb-2.5" size={20} color="e9edef" />
        <div className="uppercase text-center text-[#e9edef] text-[13px] whitespace-nowrap">
          {userPhotoStorage ? (
            <span>
              profil <br /> fotoğrafını güncelle
            </span>
          ) : (
            <span>
              profil <br /> fotoğrafı ekle
            </span>
          )}
        </div>
      </div>
    </label>
  );
};

export default UploadLabel;
