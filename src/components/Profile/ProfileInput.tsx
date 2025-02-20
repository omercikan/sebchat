import React, { memo } from "react";

type UserInfoType = {
  name: string;
  surname: string;
};

type ProfileInputProps = {
  userInfo: string;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
  placeholder: string;
  name: string;
};

const ProfileInput: React.FC<ProfileInputProps> = ({
  userInfo,
  setUserInfo,
  ...props
}) => {
  const handleSetProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <input
      type="text"
      className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
      value={userInfo}
      onChange={handleSetProfile}
      {...props}
    />
  );
};

export default memo(ProfileInput);
