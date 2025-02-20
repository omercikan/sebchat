import React from "react";

const ErrorElementBody: React.FC = () => {
  return (
    <div>
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
        className="py-3 px-4 max-sm:w-full bg-[#375FFF] text-white rounded-[5px] cursor-pointer"
      >
        Sayfayı Yenile
      </button>
    </div>
  );
};

export default ErrorElementBody;
