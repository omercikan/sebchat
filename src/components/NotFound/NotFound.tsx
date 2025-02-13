import React from "react";
import BotEye from "../../assets/images/bot-eye.png";
import BotNumber from "../../assets/images/bot-number.png";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="not-found-main-container">
      <section>
        <div className="flex gap-x-12 items-center">
          <figure className="absolute bottom-15 left-15 max-lg:bottom-5 max-lg:left-5 max-[430px]:bottom-1 max-[430px]:left-1">
            <img
              src={BotNumber}
              alt="hata boto"
              className="w-[170px] max-md:w-[150px] max-[430px]:w-[120px]"
            />
          </figure>

          <div className="not-found-content z-50 max-md:px-10 max-sm:px-5">
            <h1 className="text-[90px] max-md:text-[75px] max-sm:text-[60px] text-[#8b7af3] font-bold leading-none">
              404
            </h1>

            <span className="text-[#E0E0E0] text-[20px] max-sm:text-[16px]">
              Sayfa bulunamadı
            </span>

            <p className="text-[#B0B0B0] max-sm:text-[14px] mt-4">
              Üzgünüz, aradığınız sayfa mevcut değil. Sohbete devam etmek için
              ana sayfaya dönün.
            </p>

            <Link to={"/sohbet"}>
              <button className="border border-[#F7F7FC] text-[#F7F7FC] hover:text-[#b2a9ef] hover:border-[#6a5acd] transition duration-500 py-2 px-6 rounded-full mt-6 text-[14px] cursor-pointer">
                Ana Sayfaya Dön
              </button>
            </Link>
          </div>

          <figure className="absolute right-15 top-15 max-lg:top-5 max-lg:top-5 max-[430px]:top-1 max-[430px]:right-1">
            <img
              src={BotEye}
              alt="hata botu"
              className="w-[170px] max-md:w-[150px] max-[430px]:w-[120px]"
            />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
