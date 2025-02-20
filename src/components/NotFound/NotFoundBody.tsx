import React from "react";
import { Link } from "react-router-dom";

const NotFoundBody: React.FC = () => {
  return (
    <div className="not-found-content z-50 max-md:px-10 max-sm:px-5">
      <h1 className="text-[90px] max-md:text-[75px] max-sm:text-[60px] text-[#8b7af3] font-bold leading-none">
        404
      </h1>

      <span className="text-[#E0E0E0] text-[20px] max-sm:text-[16px]">
        Sayfa bulunamadı
      </span>

      <p className="text-[#B0B0B0] max-sm:text-[14px] mt-4">
        Üzgünüz, aradığınız sayfa mevcut değil. Sohbete devam etmek için ana
        sayfaya dönün.
      </p>

      <Link to={"/sohbet"}>
        <button className="border border-[#F7F7FC] text-[#F7F7FC] hover:text-[#b2a9ef] hover:border-[#6a5acd] transition duration-500 py-2 px-6 rounded-full mt-6 text-[14px] cursor-pointer">
          Ana Sayfaya Dön
        </button>
      </Link>
    </div>
  );
};

export default NotFoundBody;
