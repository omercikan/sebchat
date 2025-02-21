import { updateProfile } from "firebase/auth";
import React, { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { BsCheck2 } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { auth } from "../../../../firebaseConfig";

type SettingInputProps = {
  readonly: boolean;
  isEditModeName?: boolean;
  isEditModeSurname?: boolean;
  setIsEditModeName: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModeSurname?: React.Dispatch<React.SetStateAction<boolean>>;
  setInputs: React.Dispatch<
    React.SetStateAction<{
      name: string | undefined;
      surname: string;
    }>
  >;
  label: string;
  inputName: string;
  inputValue: string | undefined;
  inputs: {
    name: string | undefined;
    surname: string | undefined;
  };
  nameInputRef: React.RefObject<HTMLInputElement | null>;
  surnameInputRef: React.RefObject<HTMLInputElement | null>;
  innerRef: React.RefObject<HTMLInputElement | null>;
};

const SettingInput: React.FC<SettingInputProps> = ({
  label,
  inputValue,
  inputName,
  isEditModeName,
  isEditModeSurname,
  setIsEditModeName,
  setIsEditModeSurname,
  setInputs,
  readonly,
  inputs,
  nameInputRef,
  surnameInputRef,
  innerRef,
}) => {
  const [user] = useAuthState(auth);

  const handleUpdateInput = (e: React.MouseEvent<SVGElement>) => {
    const inputTargetName =
      e.currentTarget.previousElementSibling?.getAttribute("name");

    if (setIsEditModeSurname && inputTargetName == "name") {
      nameInputRef.current?.focus();
      setIsEditModeName(true);
      setIsEditModeSurname(false);
      if (isEditModeName && nameInputRef.current?.value?.length) {
        setIsEditModeName(false);
        if (user && user.displayName?.split(" ")[0] !== inputs.name) {
          updateProfile(user, {
            displayName: `${nameInputRef.current?.value} ${surnameInputRef.current?.value}`,
          })
            .then(() => {
              toast("Adınız başarıyla güncellendi!", {
                icon: "🎉",
                duration: 1500,
                id: "name-update",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            })
            .catch(() => {
              toast.error("Adınız güncellenemedi. Lütfen tekrar deneyin..");
            });
        }
      }
    } else {
      surnameInputRef.current?.focus();
      setIsEditModeName(false);
      if (setIsEditModeSurname) {
        setIsEditModeSurname(true);
        if (isEditModeSurname && surnameInputRef.current?.value.length) {
          setIsEditModeSurname(false);
          if (
            user &&
            user?.displayName?.split(" ")[1] !== inputs.surname &&
            inputs.surname !== "Soyadı belirtilmemiş" &&
            inputs.surname !== "Soyadı"
          ) {
            updateProfile(user, {
              displayName: `${nameInputRef.current?.value} ${surnameInputRef.current.value}`,
            })
              .then(() => {
                toast("Soyadınız başarıyla güncellendi!", {
                  icon: "🎉",
                  duration: 1500,
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              })
              .catch(() => {
                toast.error(
                  "Soyadınız güncellenemedi. Lütfen tekrar deneyin.."
                );
              });
          }
        }
      }
    }
  };

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return (
    <div>
      <label className="block text-sm text-[#375fff] pb-2">{label}</label>

      <div>
        <div className="flex items-center relative">
          <input
            type="text"
            name={inputName}
            value={inputValue}
            readOnly={readonly ? false : true}
            className="bg-transparent pb-1 text-[#F7F7FC] outline-none w-[100vh] transition-all duration-500"
            ref={innerRef}
            onChange={handleChangeInput}
          />

          {readonly ? (
            <BsCheck2
              color="#e1e1e3"
              className="absolute right-0 cursor-pointer"
              onClick={handleUpdateInput}
              size={18}
            />
          ) : (
            <HiPencil
              color="#e1e1e3"
              className="absolute right-0 cursor-pointer"
              onClick={handleUpdateInput}
            />
          )}
        </div>

        <div
          className={`max-w-0 h-[1px] bg-[#375fff] transition-all duration-300 ${
            readonly && "max-w-full"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default SettingInput;
