import React from "react";

const LogoutConfirmation: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="text-xl text-[#f7f7fc] mb-5">Çıkış yapılsın mı?</h1>

      <p className="text-[#f7f7fc] text-sm">
        Çıkış yapmak istediğinizden emin misiniz?
      </p>
    </React.Fragment>
  );
};

export default LogoutConfirmation;
