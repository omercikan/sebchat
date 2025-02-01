import React from "react";

type AuthInputTypes = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput: React.FC<AuthInputTypes> = ({ ...props }) => {
  return (
    <input
      className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
      {...props}
    />
  );
};

export default AuthInput;
