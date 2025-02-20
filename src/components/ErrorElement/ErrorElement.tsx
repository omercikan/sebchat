import React from "react";
import BotNumber from "../../assets/images/bot-number.png";
import BotEye from "../../assets/images/bot-eye.png";
import ErrorElementImage from "./ErrorElementImage";
import ErrorElementBody from "./ErrorElementBody";

const ErrorElement: React.FC = () => {
  return (
    <main className="error-element-container">
      <ErrorElementImage
        src={BotNumber}
        alt="hata botu"
        key={"ErrorElementErrorBotOne"}
        figureClassName="bottom-15 left-15 max-lg:bottom-5 max-lg:left-5 max-[430px]:bottom-1 max-[430px]:left-1"
      />

      <ErrorElementBody />

      <ErrorElementImage
        key="ErrorElementErrorBotTwo"
        src={BotEye}
        alt="hata botu"
        figureClassName="right-15 top-15 max-lg:top-5 max-lg:top-5 max-[430px]:top-1 max-[430px]:right-1"
      />
    </main>
  );
};

export default ErrorElement;
