import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { AppDispatch, RootState } from "../../redux/store";
import { changeVerificationModal } from "../../redux/slices/emailVerificationSlice";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";

const VerificationModal: React.FC = () => {
  const { emailVerification } = useSelector(
    (state: RootState) => state.emailVerificationSlice
  );
  const VerificationModalRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = auth?.currentUser;
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const closeVerificationModal = () => {
    dispatch(changeVerificationModal(false));
  };

  const sendVerificationEmailToUser = () => {
    if (!currentUser) return;

    sendEmailVerification(currentUser)
      .then(() => {
        setDisabledButton(true);
        toast.success(
          `${currentUser.email} adresine doğrulama bağlantısı gönderildi.`
        );

        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail";
        }, 1000);
      })
      .catch((error) => {
        setDisabledButton(false);
        if (error.code === "auth/too-many-requests") {
          toast.error("Çok fazla istek atıyorsunuz lütfen biraz bekleyin!");
        } else {
          toast.error("E-posta gönderilirken bir hata oluştu!");
        }
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user?.emailVerified) {
        toast.success("Doğrulama başarılı.");

        const docRef = doc(
          db,
          import.meta.env.REACT_APP_SECRET_HASH,
          user?.uid
        );

        try {
          await updateDoc(docRef, { userEmailVerified: true });
        } catch (error) {
          toast.error("Doğrulama bilgisi güncellenirken hata oluştu!");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <CSSTransition
      in={emailVerification}
      classNames="verification-modal"
      timeout={400}
      unmountOnExit
      nodeRef={VerificationModalRef}
    >
      <div
        className={`fixed grid place-content-center w-full h-screen top-0 z-20 ${
          emailVerification ? "backdrop-blur-md" : "backdrop-blur-none"
        }`}
      >
        <main
          className="bg-[#0f1828] border border-[#2A3335] text-[#f7f7fc] shadow-[#0A101F] shadow-2xl drop-shadow-2xl px-6 pt-[22px] pb-5 w-[500px] max-sm:w-[95%] mx-auto rounded-lg"
          ref={VerificationModalRef}
        >
          <h1 className="text-xl mb-5">E-posta Onayı Gerekli!</h1>

          <p className="text-sm">
            Hesabınızı kullanmaya devam edebilmeniz için e-posta adresinizi
            onaylamanız gerekiyor.
          </p>

          <div className="pt-[50px] flex gap-x-4 text-sm font-medium">
            <button
              className="bg-[#A31D1D] hover:bg-[#be3144] transition-all duration-300 py-2.5 px-6 rounded-full cursor-pointer"
              onClick={closeVerificationModal}
            >
              Kapat
            </button>
            <button
              className="bg-[#375fff] hover:bg-[#4A6DFF] disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300 py-2.5 px-6 rounded-full cursor-pointer"
              onClick={sendVerificationEmailToUser}
              disabled={disabledButton}
            >
              Gönder
            </button>
          </div>
        </main>
      </div>
    </CSSTransition>
  );
};

export default VerificationModal;
