import React, { useRef } from "react";
import { SlClose } from "react-icons/sl";
import { CSSTransition } from "react-transition-group";
import { changePanelState } from "../../../redux/slices/accountSettingPanel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

const SettingModalClose: React.FC = ({}) => {
  const { panel } = useSelector(
    (state: RootState) => state.accountSettingPanel
  );

  const dispatch = useDispatch<AppDispatch>();
  const accountModalCloseRef = useRef<HTMLDivElement>(null);

  const handleClosePanel = () => {
    dispatch(changePanelState(false));
  };

  return (
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
            onClick={handleClosePanel}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default SettingModalClose;
