import React, { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./privacy-policy.scss";

type PrivacyPolicyProps = {
  isOpenPrivacyModal: boolean;
  setIsOpenPrivacyModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpenPrivacyModal, setIsOpenPrivacyModal }) => {
    const privacyModalRef = useRef(null);

  return (
    <CSSTransition
      in={isOpenPrivacyModal}
      timeout={500}
      classNames="privacy"
      unmountOnExit
      nodeRef={privacyModalRef}
    >
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-xl z-50" ref={privacyModalRef}>
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

          <p className="mb-5 text-sm text-[#0F1828]">
            Sebchat, kullanıcılarının gizliliğini ciddiyetle korur ve kişisel
            verilerin güvenliği için gerekli tüm önlemleri alır. Bu Gizlilik
            Politikası, Sebchat uygulamasını kullanarak toplanan verilerin nasıl
            kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
          </p>

          <h2 className="font-medium">1. Toplanan Veriler</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Sebchat, kullanıcıların kayıt sırasında sağladığı kişisel bilgileri
            toplar. Bu bilgiler, ad, soyad, e-posta adresi ve mesajlaşma
            verilerini içerebilir. Ayrıca, uygulamanın kullanılmasında ortaya
            çıkan anonim veriler de toplanabilir (örneğin, uygulama kullanım
            süreleri ve cihaz bilgileri).
          </p>

          <h2 className="font-medium">2. Verilerin Kullanımı</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Toplanan veriler, kullanıcı deneyimini iyileştirmek, hizmetlerimizi
            kişiselleştirmek ve uygulama performansını analiz etmek amacıyla
            kullanılır. Kullanıcıların güvenliği için de gerekli durumlarda
            veriler kullanılabilir.
          </p>

          <h2 className="font-medium">3. Verilerin Paylaşımı</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Sebchat, kullanıcıların kişisel bilgilerini üçüncü şahıslarla
            paylaşmaz, satmaz veya kiralamaz. Ancak, yasal gereklilikler veya
            uygulama güvenliği için gerekli durumlarda, yetkililerle veri
            paylaşımı yapılabilir.
          </p>

          <h2 className="font-medium">4. Verilerin Saklanması</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Kişisel veriler, sadece uygulama hizmetlerinin sağlanması için
            gerekli süre boyunca saklanır. Verilerin saklanma süresi, yasalar ve
            düzenlemelere göre değişebilir.
          </p>

          <h2 className="font-medium">5. Çerezler ve Takip Teknolojileri</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Sebchat, uygulama performansını izlemek ve kullanıcı deneyimini
            geliştirmek için çerezler ve diğer takip teknolojilerini
            kullanabilir. Çerezler hakkında daha fazla bilgi almak ve
            kullanımını reddetmek için tarayıcı ayarlarınızı kullanabilirsiniz.
          </p>

          <h2 className="font-medium">6. Güvenlik</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Sebchat, kullanıcı verilerini korumak için endüstri standartlarında
            güvenlik önlemleri alır. Ancak, internet üzerinden yapılan veri
            iletiminin %100 güvenli olduğu garanti edilemez.
          </p>

          <h2 className="font-medium">7. Kullanıcı Hakları</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Kullanıcılar, kendilerine ait kişisel verilere erişim hakkına
            sahiptir. Ayrıca, verilerinin düzeltilmesini veya silinmesini talep
            etme hakları vardır.
          </p>

          <h2 className="font-medium">8. Değişiklikler</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Sebchat, Gizlilik Politikasını zaman zaman güncelleyebilir. Herhangi
            bir değişiklik yapıldığında, kullanıcılar bilgilendirilecektir.
          </p>

          <h2 className="font-medium">9. İletişim</h2>
          <p className="my-5 text-sm text-[#0F1828]">
            Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, bize{" "}
            <Link to="mailto:sebchat@info.com">sebchat@info.com</Link> adresi
            üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PrivacyPolicy;
