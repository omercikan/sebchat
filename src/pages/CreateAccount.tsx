import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { memo, useCallback, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";
import Profile from "../components/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import MailImage from "../assets/images/mail.png";
import LoginImage from "../assets/images/login.png";
import { PiArrowArcRightThin } from "react-icons/pi";

const CreateAccount: React.FC = () => {
  const [user, isLoading] = useAuthState(auth);
  const [login, setLogin] = useState(false);
  const [authStep, setAuthStep] = useState(1);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    let isMounted: boolean = true;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified && user.displayName) {
        navigate("/sohbet", { replace: true });
      }

      if (user && !user.emailVerified) {
        setTimeout(() => {
          if (isMounted) {
            window.location.reload();
          }
        }, 5000);
      }

      if (user?.emailVerified) {
        toast.success("Doğrulama başarılı");

        setTimeout(() => { 
          if (isMounted) {
            setAuthStep(2);
          }
        }, 3000);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [navigate]);

  const handleRegisterInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleCreateUser = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (login) {
        try {
          await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
          navigate("/sohbet");
        } catch (error: any) {
          switch (error.code) {
            case "auth/invalid-credential":
              toast.error("Hesap bulunamadı");
              break;
          }
        }
      } else {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            inputs.email,
            inputs.password
          );
          if(userCredential) {
            toast.success("Doğrulama maili gönderildi");
          }
          await sendEmailVerification(userCredential.user);
        } catch (error: any) {
          switch (error.code) {
            case "auth/weak-password":
              toast.error("Şifre en az 6 karakterli olmalıdır");
              break;
            case "auth/invalid-email":
              toast.error("Geçersiz email adresi");
              break;
            case "auth/email-already-in-use":
              toast.error("Bu e-posta adresi zaten kayıtlı");
              break;
            default:
              toast.error("Beklenmedik bir hata oluştu");
              break;
          }
        }
      }
    },
    [inputs, login, navigate]
  );

  if (isLoading) {
    return <Loading />;
  }

  if (user == null || user.displayName == null || !user.emailVerified) {
    return (
      <React.Fragment>
        {authStep == 1 ? (
          <div>
            <div
              className="absolute left-8 top-8 max-sm:left-5 max-sm:top-6"
              onClick={() => navigate("/")}
            >
              <FaChevronLeft
                cursor="pointer"
                color="#F7F7FC"
                className="text-[1.75rem] max-sm:text-xl"
              />
            </div>

            <div className="flex flex-col items-center text-center justify-center h-screen">
              <div className="relative">
                {login && (
                  <div className="max-lg:hidden">
                    <PiArrowArcRightThin
                      size={120}
                      color="#F7F7FC"
                      className="absolute -right-20 -top-12"
                    />
                    <span className="text-white italic text-sm font-medium absolute left-[95%] w-full bottom-1/2 -translate-y-full">
                      Ufak bir adım kaldı..
                    </span>
                  </div>
                )}

                <figure>
                  <img
                    src={login ? LoginImage : MailImage}
                    alt="e-posta"
                    className={login ? "w-[12.5rem]" : "w-[12.5rem]"}
                  />
                </figure>
              </div>

              <div className="phone-number-desc mt-10 text-[#F7F7FC]">
                <h1 className="text-4xl max-sm:text-3xl max-[23.4375rem]:text-2xl mb-3 font-medium">
                  E-posta Adresinizi Girin
                </h1>
                <p>
                  {login
                    ? "Lütfen kaydolduğunuz e-posta adresini girin"
                    : "Lütfen kaydolmak istediğiniz e-posta adresini giriniz"}
                </p>
              </div>

              <div className="mt-14 w-[400px] max-[400px]:w-[90%] max-[600px]:w-[380px]">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleCreateUser}
                  noValidate
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
                    value={inputs.email}
                    onChange={handleRegisterInput}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Şifre"
                    className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
                    value={inputs.password}
                    onChange={handleRegisterInput}
                  />

                  {!login && (
                    <p className="text-start text-[#F7F7FC] text-sm">
                      Hesabınız var mı?{" "}
                      <span
                        className="cursor-pointer text-[#375FFF]"
                        onClick={() => setLogin(!login)}
                      >
                        {login ? "Kayıt Ol" : "Giriş Yap"}
                      </span>
                    </p>
                  )}

                  <button
                    className="bg-[#375FFF] text-[#F7F7FC] mt-16 mx-auto w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%] py-4 rounded-[1.875rem] max-[21.875rem]:px-20 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    disabled={!inputs.email || !inputs.password}
                  >
                    {login ? "Giriş Yap" : "Kayıt Ol"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Profile />
        )}
      </React.Fragment>
    );
  }
};

export default memo(CreateAccount);
