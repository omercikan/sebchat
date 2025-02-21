import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserUploadPhotoProps } from "../../../../types";

const UploadInput: React.FC<UserUploadPhotoProps> = ({
  userPhoto,
  setUserPhoto,
}) => {
  const [photoError, setPhotoError] = useState<boolean>(false);

  const handleSetPhoto = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const image = e.target.files?.[0];
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Image = reader.result as string;
            setUserPhoto(base64Image);
            if (base64Image?.length > 5 * 1024 * 1024) {
              setPhotoError(true);
              toast.error(
                "Resim boyutu çok büyük. Lütfen 5MB'tan küçük bir dosya seçin."
              );
            } else {
              setPhotoError(false);
              localStorage.setItem("userPhoto", JSON.stringify(base64Image));
              toast.success("Profil fotoğrafınız başarıyla güncellendi.");
            }
          };
          reader.readAsDataURL(image);
        }
      } catch (error) {
        toast.error(
          "Resim boyutu çok büyük. Lütfen 5MB'tan küçük bir dosya seçin."
        );
      }
    },
    [photoError]
  );

  useEffect(() => {
    if (userPhoto && !photoError) {
      localStorage.setItem("userPhoto", JSON.stringify(userPhoto));
    }
  }, [userPhoto, photoError]);

  useEffect(() => {
    const storedUserPhoto = localStorage.getItem("userPhoto");
    if (storedUserPhoto) {
      setUserPhoto(JSON.parse(storedUserPhoto));
    }
  }, []);

  return (
    <input
      type="file"
      id="userAccountUploadPhoto"
      accept="image/gif,image/jpeg,image/jpg,image/png"
      hidden
      onChange={handleSetPhoto}
    />
  );
};

export default UploadInput;
