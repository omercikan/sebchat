import React from "react";

const AuthStepDescription: React.FC<{ login: boolean }> = ({ login }) => {
  return (
    <div className="phone-number-desc mt-10 text-[#F7F7FC]">
      <h1 className="text-4xl max-sm:text-3xl max-[23.4375rem]:text-2xl mb-3 font-medium">
        E-posta Adresinizi Girin
      </h1>
      <p>
        {login
          ? "Lütfen kaydolduğunuz e-posta adresini girin"
          : "Lütfen kaydolmak istediğiniz e-posta adresini giriniz"}
      </p>
    </div>
  );
};

export default AuthStepDescription;
