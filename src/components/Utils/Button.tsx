import React from "react";

type ButtonProps = {
  buttonText: string;
  buttonBackgroundColor: string;
  buttonTextColor?: string;
  className?: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  className,
  ...props
}) => {
  return (
    <button
      className={`${buttonBackgroundColor} ${buttonTextColor} px-28 py-3 rounded-[30px] max-[350px]:px-20 cursor-pointer ${className || ""}`}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
