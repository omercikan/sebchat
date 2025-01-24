import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import toast, { Toaster } from "react-hot-toast"
import Profile from "../components/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";

const PhoneNumber: React.FC = () => {
  const [user, isLoading] = useAuthState(auth);
  const [authStep, setAuthStep] = useState(1); 
  const navigate = useNavigate();
  const [registerInputs, setRegisterInputs] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user && !user.emailVerified) {
        setTimeout(() => {
          window.location.reload();
        }, 5000); 
      } 

      if(user?.emailVerified) {
        toast.success("Doğrulama Başarılı")
        setTimeout(() => {
          setAuthStep(2)
        }, 0);
      }
    })
  }, [])

  const handleRegisterInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }, [])

  const handleCreateUser = useCallback( async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerInputs.email, registerInputs.password);
      await sendEmailVerification(userCredential.user)
      if(userCredential.user) {
        toast.success("Doğrulama maili gönderildi")
      }
    } catch (error) {
      switch(error.code) {
        case "auth/weak-password": 
          toast.error("Şifre en az 6 karakterli olmalıdır")
          break
        case "auth/invalid-email":
          toast.error("Geçersiz email adresi")
          break
        default: 
          toast.error("Beklenmedik bir hata oluştu")
          break
      }
    }
  }, [registerInputs])

  if(isLoading) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {authStep == 1 ? (
        <div>
          <div>
            <Toaster 
              position="top-right"
              reverseOrder={true}
            />
        </div>
    
          <div className="absolute left-8 top-8 max-sm:left-5 max-sm:top-6" onClick={() => navigate("/")}>
            <FaChevronLeft
              cursor="pointer"
              color="#F7F7FC"
              className="text-[28px] max-sm:text-xl"
            />
          </div>
    
          <div className="flex flex-col items-center text-center justify-center h-screen">
            <div className="phone-number-desc text-[#F7F7FC]">
              <h1 className="text-4xl max-sm:text-3xl max-[375px]:text-2xl mb-3 font-medium">
                E-posta Adresinizi Girin
              </h1>
              <p>Lütfen kayıt olacağınız e-posta adresinizi giriniz</p>
            </div>
    
            <div className="mt-14 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%]">
              <form className="flex flex-col gap-3" onSubmit={handleCreateUser} noValidate>
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta"
                  className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
                  value={registerInputs.email}
                  onChange={handleRegisterInput}
                />
    
                <input 
                  type="password" 
                  name="password"
                  placeholder="Şifre"
                  className="bg-[#152033] text-[#F7F7FC] p-3 outline-none rounded-md w-full"
                  value={registerInputs.password}
                  onChange={handleRegisterInput}
                />
    
                <button 
                  className="bg-[#375FFF] text-[#F7F7FC] mt-16 w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%] py-4 rounded-[30px] max-[350px]:px-20 disabled:bg-gray-500 disabled:cursor-not-allowed"
                  disabled={!registerInputs.email || !registerInputs.password}
                >
                  Devam Et
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : <Profile /> }
    </React.Fragment>
  );
};

export default PhoneNumber;
