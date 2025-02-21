import React, { memo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import LogoutModal from "../logout/LogoutModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SettingModalClose from "./SettingModalClose";
import SettingModalHeader from "./SettingModalHeader";
import UserUploadPhoto from "./UploadPhoto/UserUploadPhoto";
import SettingInput from "./AccountSettıngInput/SettingInput";
import AccountLogout from "./AccountLogout";

type UserAccountSettingProps = {
  name: string | undefined;
  surname: string | undefined;
};

const UserAccountSetting: React.FC<UserAccountSettingProps> = ({
  name,
  surname,
}) => {
  const [inputs, setInputs] = useState({
    name: name,
    surname: surname ? surname : "Soyadı belirtilmemiş",
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const surnameInputRef = useRef<HTMLInputElement>(null);
  const [isEditModeName, setIsEditModeName] = useState(false);
  const [isEditModeSurname, setIsEditModeSurname] = useState(false);
  const accountModalRef = useRef<HTMLDivElement>(null);
  const [logoutModal, setLogoutModal] = useState<boolean>(false);
  const [userPhoto, setUserPhoto] = useState("");
  const { panel } = useSelector(
    (state: RootState) => state.accountSettingPanel
  );

  return (
    <div className="user-account-setting-container">
      <CSSTransition
        in={panel}
        classNames="account-modal"
        timeout={380}
        unmountOnExit
        nodeRef={accountModalRef}
      >
        <div className="fixed right-0 top-0 backdrop-blur-sm max-sm:backdrop-blur-none w-full h-full z-30">
          <SettingModalClose />

          <div
            className="bg-[#0f1828] shadow-[#000] shadow-2xl drop-shadow-2xl w-[430px] max-sm:w-full fixed right-0 top-0 h-full"
            ref={accountModalRef}
          >
            <SettingModalHeader />

            <UserUploadPhoto
              userPhoto={userPhoto}
              setUserPhoto={setUserPhoto}
            />

            <div className="px-[30px] pt-3.5 pb-2.5 mt-14 flex flex-col gap-y-5">
              <SettingInput
                inputs={inputs}
                label="Adınız"
                inputName="name"
                setInputs={setInputs}
                innerRef={nameInputRef}
                nameInputRef={nameInputRef}
                inputValue={inputs.name}
                readonly={isEditModeName}
                isEditModeName={isEditModeName}
                surnameInputRef={surnameInputRef}
                isEditModeSurname={isEditModeSurname}
                setIsEditModeName={setIsEditModeName}
                setIsEditModeSurname={setIsEditModeSurname}
              />

              <SettingInput
                inputs={inputs}
                label="Soyadınız"
                inputName="surname"
                setInputs={setInputs}
                innerRef={surnameInputRef}
                nameInputRef={nameInputRef}
                inputValue={inputs.surname}
                readonly={isEditModeSurname}
                isEditModeName={isEditModeName}
                surnameInputRef={surnameInputRef}
                isEditModeSurname={isEditModeSurname}
                setIsEditModeName={setIsEditModeName}
                setIsEditModeSurname={setIsEditModeSurname}
              />
            </div>

            <AccountLogout setLogoutModal={setLogoutModal} />
          </div>
        </div>
      </CSSTransition>

      <LogoutModal isLogout={logoutModal} setLogoutModal={setLogoutModal} />
    </div>
  );
};

export default memo(UserAccountSetting);
