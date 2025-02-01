import React from "react";

type AuthToggleProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthToggle: React.FC<AuthToggleProps> = ({ login, setLogin }) => {
  return (
    <React.Fragment>
      {!login && (
        <p className="text-start text-[#F7F7FC] text-sm">
          Hesabınız var mı?{" "}
          <span
            className="cursor-pointer text-[#375FFF]"
            onClick={() => setLogin(!login)}
          >
            {login ? "Kayıt Ol" : "Giriş Yap"}
          </span>
        </p>
      )}
    </React.Fragment>
  );
};

export default AuthToggle;
