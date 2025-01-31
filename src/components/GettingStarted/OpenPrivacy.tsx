import React from "react";

type OpenPrivacyProps = {
    setIsOpenPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>
}

const OpenPrivacy: React.FC<OpenPrivacyProps> = ({ setIsOpenPrivacyModal }) => {
  return (
    <strong
      className="mt-20 mb-5 block font-normal text-sm cursor-pointer w-max mx-auto"
      onClick={() => setIsOpenPrivacyModal(true)}
    >
      Gizlilik Politikamız
    </strong>
  );
};

export default OpenPrivacy;
