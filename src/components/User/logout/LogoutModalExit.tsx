import React from "react";
import { auth } from "../../../firebaseConfig";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { changePanelState } from "../../../redux/slices/accountSettingPanel";
import { setChatId } from "../../../redux/slices/setChatIdSlice";

type LogoutModalExitProps = {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogoutModalExit: React.FC<LogoutModalExitProps> = ({
  setLogoutModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const closeLogoutModal = () => {
    setLogoutModal(false);
  };

  const handleExitAccount = () => {
    if (!auth) return;

    toast.success("Çıkış yapılıyor..", {
      id: "logout-loading",
      duration: 3000,
    });

    setLogoutModal(false);

    setTimeout(() => {
      auth
        .signOut()
        .then(() => {
          dispatch(changePanelState(false));
          dispatch(setChatId(""));
        })
        .catch(() =>
          toast.error(
            "Çıkış işlemi sırasında bir sorun oluştu. Lütfen tekrar deneyin."
          )
        );
    }, 3000);
  };

  return (
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
  );
};

export default LogoutModalExit;
