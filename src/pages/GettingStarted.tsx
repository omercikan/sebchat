import React, { useEffect, useState } from "react";
import PrivacyPolicy from "../components/Privacy/PrivacyPolicy";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import Loading from "../components/Loading";
import HeroSection from "../components/GettingStarted/HeroSection";
import OpenPrivacy from "../components/GettingStarted/OpenPrivacy";
import Button from "../components/Utils/Button";

const GettingStarted: React.FC = () => {
  const [isOpenPrivacyModal, setIsOpenPrivacyModal] = useState<boolean>(false);
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/hesap-olustur");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div className="getting-started-container">
        <div className="text-[#F7F7FC] h-screen flex flex-col justify-center items-center text-center">
          <div className="getting-started-wrapper">
            <HeroSection />

            <OpenPrivacy setIsOpenPrivacyModal={setIsOpenPrivacyModal} />

            <Button
              buttonText="Sohbete Başla"
              buttonBackgroundColor="bg-[#375FFF]"
              onClick={() => navigate("/hesap-olustur")}
            />
          </div>
        </div>
      </div>

      <PrivacyPolicy
        isOpenPrivacyModal={isOpenPrivacyModal}
        setIsOpenPrivacyModal={setIsOpenPrivacyModal}
      />
    </React.Fragment>
  );
};

export default GettingStarted;
