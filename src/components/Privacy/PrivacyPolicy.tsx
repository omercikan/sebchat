import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import "./privacy-policy.scss";
import PolicyText from "./PolicyText";
import PolicyTitle from "./PolicyTitle";

type PrivacyPolicyProps = {
  isOpenPrivacyModal: boolean;
  setIsOpenPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  isOpenPrivacyModal,
  setIsOpenPrivacyModal,
}) => {
  const privacyModalRef = useRef(null);

  return (
    <CSSTransition
      in={isOpenPrivacyModal}
      timeout={500}
      classNames="privacy"
      unmountOnExit
      nodeRef={privacyModalRef}
    >
      <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-xl z-50"
        ref={privacyModalRef}
      >
        <div
          className="w-[500px] h-[600px] max-sm:w-[90%] max-sm:h-[90%] p-5 rounded-lg bg-[#F7F7FC] overflow-y-scroll transition-all duration-500 ease-in-out transform"
          style={{ scrollbarWidth: "none" }}
        >
          <header className="flex items-center justify-between mb-6">
            <h1 className="font-medium">Sebchat Gizlilik Politikası</h1>
            <IoCloseOutline
              size={24}
              cursor="pointer"
              onClick={() => setIsOpenPrivacyModal(false)}
            />
          </header>

          <PolicyText
            key="PolicyHeaderContent"
            policyContent="Sebchat, kullanıcılarının gizliliğini ciddiyetle korur ve kişisel
            verilerin güvenliği için gerekli tüm önlemleri alır. Bu Gizlilik
            Politikası, Sebchat uygulamasını kullanarak toplanan verilerin nasıl
            kullanıldığını, saklandığını ve korunduğunu açıklamaktadır. Sebchat,
            tamamen güvenli bir mesajlaşma deneyimi sunmayı taahhüt eder."
          />

          <PolicyTitle
            policyTitle="1. Mesajlaşma Güvenliği ve Gizliliği"
            key="PolictTitleOne"
          />
          <PolicyText
            key="PolicyTextOne"
            policyContent="Sebchat'te yapılan tüm mesajlaşmalar, kullanıcılar arasında güvenli
            bir şekilde iletilir. Ancak, uçtan uca şifreleme kullanılmadığı için
            kullanıcıların kişisel mesajları platform üzerinden saklanabilir
            veya iletilmiş olabilir. Sebchat, kullanıcıların gizliliğini korumak
            için çeşitli güvenlik önlemleri alır, ancak her mesajın içeriği
            sadece kullanıcılar arasında güvenli bir şekilde iletilmeye
            çalışılır."
          />

          <PolicyTitle policyTitle="2. Toplanan Veriler" key="PolicyTitleTwo" />
          <PolicyText
            key="PolicyContentTwo"
            policyContent="Sebchat, kullanıcıların kayıt sırasında sağladığı kişisel bilgileri
            toplar. Bu bilgiler, ad, soyad, e-posta adresi ve diğer iletişim
            bilgilerini içerebilir. Mesajlaşma içeriği yalnızca kullanıcılar
            arasındaki iletişimde yer alır ve kullanıcıların açık izni olmadan
            depolanmaz veya işlenmez."
          />

          <PolicyTitle
            key="PolicyTitleThree"
            policyTitle="3. Verilerin Kullanımı"
          />
          <PolicyText
            key="PolicyTextThree"
            policyContent="Toplanan veriler, yalnızca kullanıcı deneyimini iyileştirmek ve
            uygulama performansını analiz etmek amacıyla kullanılır. Sebchat,
            mesaj içeriklerinizi görüntülemez veya bu içerikleri herhangi bir
            amaçla kullanmaz."
          />

          <PolicyTitle
            key="PolicyTitleFour"
            policyTitle="4. Verilerin Paylaşımı"
          />
          <PolicyText
            key="PolicyTextFour"
            policyContent="Sebchat, kullanıcıların kişisel bilgilerini veya mesaj içeriklerini
            üçüncü şahıslarla paylaşmaz, satmaz veya kiralamaz. Yalnızca yasal
            gereklilikler kapsamında, gerektiğinde yetkililerle anonim veriler
            paylaşılabilir."
          />

          <PolicyTitle
            key="PolictTitleFive"
            policyTitle="5. Verilerin Saklanması"
          />
          <PolicyText
            key="PolictTetxFive"
            policyContent="Sebchat, mesaj içeriğini yalnızca iletilen süre boyunca geçici
            olarak saklar ve sunuculardan otomatik olarak siler. Kişisel veriler
            ise yalnızca hizmetlerin sağlanması için gerekli süre boyunca
            saklanır ve ilgili yasalar çerçevesinde korunur."
          />

          <PolicyTitle key="PolicyTitleSix" policyTitle="6. Güvenlik" />
          <PolicyText
            key="PolicyTextSix"
            policyContent="Sebchat, kullanıcı verilerini korumak için endüstri standartlarında
            güvenlik önlemleri uygular. Bununla birlikte, internet üzerinden
            yapılan veri iletiminin %100 güvenli olduğu garanti edilemez."
          />

          <PolicyTitle
            key="PolicyTitleSeven"
            policyTitle="7. Kullanıcı Hakları"
          />
          <PolicyText
            key="PolicyTextSeven"
            policyContent="Kullanıcılar, kendilerine ait kişisel verilere erişim hakkına
            sahiptir. Ayrıca, verilerinin düzeltilmesini veya tamamen
            silinmesini talep etme hakkına da sahiptirler."
          />

          <PolicyTitle key="PolicyTitleEight" policyTitle="8. Değişiklikler" />
          <PolicyText
            key="PolicyTextEight"
            policyContent="Sebchat, Gizlilik Politikasını zaman zaman güncelleyebilir. Bu tür
            değişiklikler, uygulama üzerinden veya e-posta yoluyla kullanıcılara
            bildirilecektir."
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default PrivacyPolicy;
