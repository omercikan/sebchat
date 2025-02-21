import React from "react";

type AccountLogoutProps = {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountLogout: React.FC<AccountLogoutProps> = ({ setLogoutModal }) => {
  const handleLogoutModal = () => {
    setLogoutModal(true);
  };

  return (
    <div className="account-logout">
      <div className="px-[30px] absolute bottom-5 w-full text-center">
        <button
          className="text-[#58151c] bg-[#f8d7da] p-2 rounded-md w-full cursor-pointer"
          onClick={handleLogoutModal}
        >
          Çıkış yap
        </button>
      </div>
    </div>
  );
};

export default AccountLogout;
