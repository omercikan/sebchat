import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { changePanelState } from "../../redux/slices/accountSettingPanel";
import { setChatId } from "../../redux/slices/setChatIdSlice";

type LogoutModalProps = {
  isLogout: boolean;
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogoutModal: React.FC<LogoutModalProps> = ({
  isLogout,
  setLogoutModal,
}) => {
  const logoutModalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  const handleExitAccount = () => {
    toast.success("Çıkış yapılıyor..", {
        id: "logout-loading",
        duration: 3000
    });

    setLogoutModal(false)
    
    setTimeout(() => {
      signOut(auth);
      dispatch(changePanelState(false));
      dispatch(setChatId(""))
    }, 3000);
  };

  return (
    <React.Fragment>
      <CSSTransition
        in={isLogout}
        timeout={500}
        classNames="logout-modal"
        unmountOnExit
        nodeRef={logoutModalRef}
      >
        <div
          className={`${
            isLogout && "backdrop-blur-md"
          } w-full h-screen fixed left-0 top-0 flex justify-center items-center z-50`}
        >
          <div
            className="bg-[#0f1828] shadow-[#0A101F] shadow-2xl drop-shadow-2xl px-6 pt-[22px] pb-5 w-[500px] max-sm:w-[95%] rounded-lg"
            ref={logoutModalRef}
          >
            <h1 className="text-xl text-[#f7f7fc] mb-5">Çıkış yapılsın mı?</h1>

            <p className="text-[#f7f7fc] text-sm">
              Çıkış yapmak istediğinizden emin misiniz?
            </p>

            <div className="pt-[50px] flex justify-end gap-x-4 text-sm font-medium">
              <button
                className="border border-[#8696A026] hover:shadow-xl text-[#375fff] transition-shadow duration-300 py-2.5 px-6 rounded-full cursor-pointer"
                onClick={closeLogoutModal}
              >
                İptal
              </button>

              <button
                className="bg-[#375fff] text-[#f7f7fc] hover:bg-[#4A6DFF] rounded-full py-2.5 px-6 transition-all duration-300 cursor-pointer"
                onClick={handleExitAccount}
              >
                Çıkış yap
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default LogoutModal;
