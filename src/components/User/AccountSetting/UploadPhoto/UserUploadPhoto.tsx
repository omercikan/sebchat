import React from "react";
import UploadLabel from "./UploadLabel";
import UploadInput from "./UploadInput";
import { UserUploadPhotoProps } from "../../../../types";

const UserUploadPhoto: React.FC<UserUploadPhotoProps> = ({ userPhoto, setUserPhoto }) => {
  return (
    <div className="my-7 w-[200px] relative h-[200px] mx-auto">
      <UploadLabel userPhoto={userPhoto} />
      <UploadInput userPhoto={userPhoto} setUserPhoto={setUserPhoto} />
    </div>
  );
};

export default UserUploadPhoto;
