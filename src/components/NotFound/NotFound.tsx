import React from "react";
import BotEye from "../../assets/images/bot-eye.png";
import BotNumber from "../../assets/images/bot-number.png";
import ErrorElementImage from "../ErrorElement/ErrorElementImage";
import NotFoundBody from "./NotFoundBody";

const NotFound: React.FC = () => {
  return (
    <main className="not-found-main-container">
      <section>
        <div className="flex gap-x-12 items-center">
          <ErrorElementImage
            src={BotNumber}
            alt="hata botu"
            figureClassName="bottom-15 left-15 max-lg:bottom-5 max-lg:left-5 max-[430px]:bottom-1 max-[430px]:left-1"
            key="NotFoundErrorBotOne"
          />

          <NotFoundBody />

          <ErrorElementImage
            src={BotEye}
            alt="hata botu"
            figureClassName="right-15 top-15 max-lg:top-5 max-lg:top-5 max-[430px]:top-1 max-[430px]:right-1"
            key="NotFoundErrorBotTwo"
          />
        </div>
      </section>
    </main>
  );
};

export default NotFound;
