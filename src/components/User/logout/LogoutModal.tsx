import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import LogoutModalExit from "./LogoutModalExit";
import LogoutConfirmation from "./LogoutConfirmation";

type LogoutModalProps = {
  isLogout: boolean;
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogoutModal: React.FC<LogoutModalProps> = ({
  isLogout,
  setLogoutModal,
}) => {
  const logoutModalRef = useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <CSSTransition
        in={isLogout}
        timeout={400}
        classNames="logout-modal"
        unmountOnExit
        nodeRef={logoutModalRef}
      >
        <div
          className={`${
            isLogout ? "backdrop-blur-md" : ""
          } w-full h-screen fixed left-0 top-0 flex justify-center items-center z-50`}
        >
          <div
            className="bg-[#0f1828] border border-[#2A3335] shadow-[#0A101F] shadow-2xl drop-shadow-2xl px-6 pt-[22px] pb-5 w-[500px] max-sm:w-[95%] rounded-lg"
            ref={logoutModalRef}
          >
            <LogoutConfirmation />

            <LogoutModalExit setLogoutModal={setLogoutModal} />
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default LogoutModal;
