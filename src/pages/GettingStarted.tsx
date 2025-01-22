import React, { useState } from "react";
import ConnectStart from "../assets/images/connect_start.png";
import PrivacyPolicy from "../components/PrivacyPolicy";

const GettingStarted: React.FC = () => {
  const [isOpenPrivacyModal, setIsOpenPrivacyModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className="getting-started-container">
        <div className="bg-[#0F1828] text-[#F7F7FC] h-screen flex flex-col justify-center items-center text-center select-none">
          <div className="getting-started-wrapper">
            <figure>
              <img src={ConnectStart} alt="Baslarken" className="w-[325px] max-md:w-[300px] max-sm:w-[250px] mx-auto pointer-events-none mb-10" />
              <figcaption className="text-2xl max-[500px]:text-xl font-medium">
                Sevdiklerinizle dünyanın 
                <br /> her köşesinden anında bağlantı kurun.
              </figcaption>
            </figure>

            <strong className="mt-20 mb-5 block font-normal text-sm cursor-pointer w-max mx-auto" onClick={() => setIsOpenPrivacyModal(true)}>Gizlilik Politikamız</strong>
            <button className="bg-[#375FFF] px-28 py-3 rounded-[30px] max-[350px]:px-20">Sohbete Başla</button>
          </div>
        </div>
      </div>

      <PrivacyPolicy isOpenPrivacyModal={isOpenPrivacyModal} setIsOpenPrivacyModal={setIsOpenPrivacyModal}/>
    </React.Fragment>
  );
};

export default GettingStarted;