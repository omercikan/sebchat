import React from "react";
import MailImage from "../../assets/images/mail.png";
import LoginImage from "../../assets/images/login.png";

const AuthStepImage: React.FC<{ login: boolean }> = ({ login }) => {
  return (
    <figure>
      <img
        src={login ? LoginImage : MailImage}
        alt="e-posta"
        className={login ? "w-[12.5rem]" : "w-[12.5rem]"}
      />
    </figure>
  );
};

export default AuthStepImage;
