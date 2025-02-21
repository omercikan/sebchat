import React, { memo, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

type UserProfileInputProps = {
  photoError?: boolean;
  setPhotoError: React.Dispatch<React.SetStateAction<boolean>>;
  userPhoto?: string;
  setUserPhoto: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  name: string;
  accept?: string;
  id: string;
  className: string;
};

const UserProfileInput: React.FC<UserProfileInputProps> = ({
  userPhoto,
  photoError,
  setPhotoError,
  setUserPhoto,
  ...props
}) => {
  const handleSetPhoto = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const image = e.target.files?.[0];
        if (image) {
          if (image.size > 1024 * 1024 * 2) {
            setPhotoError(true);
            toast.error(
              "Resim boyutu çok büyük. Lütfen 1MB'tan küçük bir dosya seçin."
            );
            return;
          }

          if (!["image/jpeg", "image/png", "image/jpg"].includes(image.type)) {
            setPhotoError(true);
            toast.error("Lütfen geçerli bir resim formatı seçin.");
            return;
          }

          setPhotoError(false);
          const reader = new FileReader();
          reader.onloadend = () => setUserPhoto(reader.result as string);
          reader.readAsDataURL(image);
        }
      } catch (error) {
        toast.error("Resim yüklenirken bir sorun oluştu.");
      }
    },
    [photoError]
  );

  useEffect(() => {
    try {
      if (userPhoto) {
        localStorage.setItem("userPhoto", JSON.stringify(userPhoto));
      }
    } catch (error) {
      setPhotoError(true);
      toast.error("Resim boyutu çok büyük. Lütfen daha küçük bir dosya seçin.");
    }
  }, [userPhoto, photoError]);

  useEffect(() => {
    const storedUserPhoto = localStorage.getItem("userPhoto");
    if (storedUserPhoto) {
      setUserPhoto(JSON.parse(storedUserPhoto));
    }
  }, [photoError]);

  return <input onChange={handleSetPhoto} {...props} />;
};

export default memo(UserProfileInput);
