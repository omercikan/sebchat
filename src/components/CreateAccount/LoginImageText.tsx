import React from "react";
import { PiArrowArcRightThin } from "react-icons/pi";

const LoginImageText: React.FC<{ login: boolean }> = ({ login }) => {
  return (
    <React.Fragment>
      {login && (
        <div className="max-lg:hidden">
          <PiArrowArcRightThin
            size={120}
            color="#F7F7FC"
            className="absolute -right-20 -top-12"
          />
          <span className="text-white italic text-sm font-medium absolute left-[95%] w-full bottom-1/2 -translate-y-full">
            Ufak bir adım kaldı..
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

export default LoginImageText;
