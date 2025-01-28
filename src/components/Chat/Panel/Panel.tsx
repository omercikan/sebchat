import React, { useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { signOut } from "firebase/auth"
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

type PanelProps = {
  panel: boolean;
};

const Panel: React.FC<PanelProps> = ({ panel }) => {
  const panelRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);

    navigate("/")
  }

  return (
    <CSSTransition
      in={panel}
      timeout={500}
      classNames="panel"
      unmountOnExit
      nodeRef={panelRef}
    >
      <ul
        className={`text-[#F7F7FC] bg-[#636667] flex flex-col gap-0.5 rounded-lg py-1 px-1 absolute -left-20 top-[125%]`}
        onClick={(e) => e.stopPropagation()}
        ref={panelRef}
      >
        <li className="flex items-center gap-2 hover:bg-[#7a7b7b] transition duration-300 rounded-md p-1">
          <FaRegUser /> Hesabım
        </li>
        <li className="hover:bg-[#7a7b7b] rounded-md transition duration-300 p-1" onClick={handleLogout}>
          Çıkış
        </li>
      </ul>
    </CSSTransition>
  );
};

export default Panel;
