import React from "react";

type AuthInputTypes = {
  type: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterKeyHint?: "send";
  className?: string;
  innerRef?: React.RefObject<HTMLInputElement | null>;
};

const AuthInput: React.FC<AuthInputTypes> = ({ className, innerRef, ...props }) => {
  return (
    <input
      className={`bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full ${className || ""}`}
      ref={innerRef}
      {...props}
    />
  );
};

export default AuthInput;
