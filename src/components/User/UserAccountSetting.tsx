import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { HiPencil } from "react-icons/hi2";
import { BsCheck2 } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { IoIosArrowBack } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import LogoutModal from "./LogoutModal";

const userPhotoStorage =
  localStorage.getItem("userPhoto") &&
  JSON.parse(localStorage.getItem("userPhoto") || "[]");

type UserAccountSettingProps = {
  name: string | undefined;
  surname: string | undefined;
  panel: boolean;
  setPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserAccountSetting: React.FC<UserAccountSettingProps> = ({
  name,
  surname,
  panel,
  setPanel,
}) => {
  const [user] = useAuthState(auth);
  const [isEditModeName, setIsEditModeName] = useState(false);
  const [isEditModeSurname, setIsEditModeSurname] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  const accountModalRef = useRef<HTMLDivElement>(null);
  const accountModalCloseRef = useRef<HTMLDivElement>(null);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const [userPhoto, setUserPhoto] = useState("");
  const [inputs, setInputs] = useState({
    name: name,
    surname: surname ? surname : "Soyadı belirtilmemiş",
  });

  const handleUpdateInput = (e: React.MouseEvent<SVGElement>) => {
    const inputTargetName =
      e.currentTarget.previousElementSibling?.getAttribute("name");

    if (inputTargetName == "name") {
      nameInputRef.current?.focus();
      setIsEditModeName(true);
      setIsEditModeSurname(false);
      if (isEditModeName && nameInputRef.current?.value.length) {
        setIsEditModeName(false);
        if (user && user.displayName?.split(" ")[0] !== inputs.name) {
          updateProfile(user, { displayName: `${nameInputRef.current?.value} ${surnameInputRef.current?.value}` })
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
      setIsEditModeSurname(true);
      if (isEditModeSurname && surnameInputRef.current?.value.length) {
        setIsEditModeSurname(false);
        if (user && user?.displayName?.split(" ")[1] !== inputs.surname && inputs.surname !== "Soyadı belirtilmemiş" && inputs.surname !== "Soyadı") {
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
              toast.error("Soyadınız güncellenemedi. Lütfen tekrar deneyin..");
            });
        }
      }
    }
  };

  const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []) 

  const handleSetPhoto = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const image = e.target.files?.[0];

      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result as string;
          setUserPhoto(base64Image);
          localStorage.setItem("userPhoto", JSON.stringify(base64Image));
          toast.success("Profil fotoğrafınız başarıyla güncellendi.")
        };
        reader.readAsDataURL(image);
      }
    },
    []
  );

  const handleLogoutModal = () => {
    setLogoutModal(true);
  };

  useEffect(() => {
    if (userPhoto) {
      localStorage.setItem("userPhoto", JSON.stringify(userPhoto));
    }
  }, [userPhoto]);

  useEffect(() => {
    const storedUserPhoto = localStorage.getItem("userPhoto");
    if (storedUserPhoto) {
      setUserPhoto(JSON.parse(storedUserPhoto));
    }
  }, []);

  return (
    <div className="user-account-setting-container">
      <div className="user-account-setting-wrapper">
        <CSSTransition
          in={panel}
          classNames="account-modal"
          timeout={400}
          unmountOnExit
          nodeRef={accountModalRef}
        >
          <div className="fixed right-0 top-0 backdrop-blur-sm max-sm:backdrop-blur-none w-full h-full">
            <CSSTransition
              in={panel}
              classNames="account-modal-close"
              timeout={400}
              unmountOnExit
              nodeRef={accountModalCloseRef}
            >
              <div className="close-account-setting-container max-sm:hidden">
                <div
                  className="absolute right-[500px] top-1/2 -translate-y-1/2"
                  ref={accountModalCloseRef}
                >
                  <SlClose
                    color="F7F7FC"
                    size={30}
                    cursor="pointer"
                    onClick={() => setPanel(false)}
                  />
                </div>
              </div>
            </CSSTransition>

            <div
              className="bg-[#0f1828] shadow-[#000] shadow-2xl drop-shadow-2xl w-[430px] max-sm:w-full fixed right-0 top-0 h-screen"
              ref={accountModalRef}
            >
              <header className="ps-4 pe-2.5 pt-4">
                <div className="flex items-center gap-x-7">
                  <IoIosArrowBack
                    size={22}
                    color="gray"
                    cursor="pointer"
                    className="stroke-[10px] stroke-[gray] max-sm:block sm:hidden"
                    onClick={() => setPanel(false)}
                  />

                  <h1 className="text-[#F7F7FC] text-[22px] font-medium">
                    Profil
                  </h1>
                </div>
              </header>

              <div className="user-upload-photo">
                <div className="my-7 w-[200px] relative h-[200px] mx-auto">
                  <label
                    htmlFor="userAccountUploadPhoto"
                    className="cursor-pointer"
                  >
                    <img
                      src={userPhoto ? userPhoto : userPhotoStorage}
                      alt={`${user?.displayName?.trim()}`}
                      className="rounded-full mx-auto w-full h-full object-cover opacity-50 border-[2px] border-dashed border-[#fff]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255, 255, 255, .3), rgba(0, 0, 0, .3))",
                      }}
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <FaCamera
                        className="mx-auto mb-2.5"
                        size={20}
                        color="e9edef"
                      />
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

                  <input
                    type="file"
                    id="userAccountUploadPhoto"
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                    hidden
                    onChange={handleSetPhoto}
                  />
                </div>
              </div>

              <div className="user-profile-information">
                <div className="px-[30px] pt-3.5 pb-2.5 mt-14 flex flex-col gap-5">
                  <div>
                    <label className="block text-sm text-[#375fff] pb-2">
                      Adınız
                    </label>

                    <div>
                      <div className="flex items-center relative">
                        <input
                          type="text"
                          name="name"
                          value={inputs.name}
                          readOnly={isEditModeName ? false : true}
                          className="bg-transparent pb-1 text-[#F7F7FC] outline-none w-[100vh] transition-all duration-500"
                          ref={nameInputRef}
                          onChange={handleChangeInput}
                        />

                        {isEditModeName ? (
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
                          isEditModeName && "max-w-full"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#375FFF] pb-2">
                      Soyadınız
                    </label>

                    <div>
                      <div className="flex items-center relative">
                        <input
                          type="text"
                          name="surname"
                          value={inputs.surname}
                          readOnly={isEditModeSurname ? false : true}
                          className="bg-transparent pb-1 text-[#F7F7FC] outline-none w-[100vh] transition-all duration-500"
                          ref={surnameInputRef}
                          onChange={handleChangeInput}
                        />

                        {isEditModeSurname ? (
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
                          isEditModeSurname && "max-w-full"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="account-logout">
                <div className="px-[30px] absolute bottom-5 w-full text-center">
                  <button
                    className="text-[#58151c] bg-[#f8d7da] p-2 rounded-md w-full"
                    onClick={handleLogoutModal}
                  >
                    Çıkış yap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>

      <LogoutModal isLogout={logoutModal} setLogoutModal={setLogoutModal} />
    </div>
  );
};

export default memo(UserAccountSetting);
