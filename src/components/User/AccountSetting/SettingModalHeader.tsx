import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { changePanelState } from "../../../redux/slices/accountSettingPanel";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

const SettingModalHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClosePanel = () => {
    dispatch(changePanelState(false));
  };

  return (
    <header className="ps-4 pe-2.5 pt-4">
      <div className="flex items-center gap-x-7">
        <IoIosArrowBack
          size={22}
          color="gray"
          cursor="pointer"
          className="stroke-[10px] stroke-[gray] max-sm:block sm:hidden"
          onClick={handleClosePanel}
        />

        <h1 className="text-[#F7F7FC] text-[22px] font-medium">Profil</h1>
      </div>
    </header>
  );
};

export default SettingModalHeader;
