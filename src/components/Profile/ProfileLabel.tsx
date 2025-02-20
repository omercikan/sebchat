import React, { memo } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import ProfileImage from "../../assets/images/profile.png";

const ProfileLabel: React.FC<{ userPhoto: string }> = ({ userPhoto }) => {
  return (
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
  );
};

export default memo(ProfileLabel);
