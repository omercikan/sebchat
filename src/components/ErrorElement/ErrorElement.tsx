import React from "react";
import BotNumber from "../../assets/images/bot-number.png";
import BotEye from "../../assets/images/bot-eye.png";

const ErrorElement: React.FC = () => {
  return (
    <main className="error-element-container">
      <figure className="absolute bottom-15 left-15 max-lg:bottom-5 max-lg:left-5 max-[430px]:bottom-1 max-[430px]:left-1">
        <img
          src={BotNumber}
          alt="hata boto"
          className="w-[170px] max-md:w-[150px] max-[430px]:w-[120px]"
        />
      </figure>

      <h1 className="text-[90px] max-md:text-[75px] max-sm:text-[60px] text-[#8b7af3] font-bold leading-none">
        404
      </h1>
      <h2 className="text-3xl max-sm:text-[18px]">
        Oops! Bir şeyler yanlış gitti.
      </h2>
      <p className="my-5">
        Üzgünüz, sunucu kaynaklı bir hata oluştu. Lütfen tekrar deneyin ya da
        destek ekibimizle iletişime geçin.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="py-4 bg-[#375FFF] text-white rounded-[5px] cursor-pointer"
      >
        Sayfayı Yenile
      </button>

      <figure className="absolute right-15 top-15 max-lg:top-5 max-lg:top-5 max-[430px]:top-1 max-[430px]:right-1">
        <img
          src={BotEye}
          alt="hata botu"
          className="w-[170px] max-md:w-[150px] max-[430px]:w-[120px]"
        />
      </figure>
    </main>
  );
};

export default ErrorElement;
