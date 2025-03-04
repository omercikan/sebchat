import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { auth } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AuthInput from "../../Utils/AuthInput";
import AuthToggle from "./AuthToggle";
import Button from "../../Utils/Button";

type AuthFormProps = {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null | undefined;
  inputs: {
    email: string;
    password: string;
  };
  setInputs: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  setAuthStep: React.Dispatch<React.SetStateAction<number>>;
};

const AuthForm: React.FC<AuthFormProps> = ({
  login,
  setLogin,
  user,
  inputs,
  setInputs,
  setAuthStep,
}) => {
  const navigate = useNavigate();

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
            case "auth/invalid-email":
              toast.error("Geçersiz e-posta");
          }
        }
      } else {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            inputs.email,
            inputs.password
          );

          if (userCredential) {
            setAuthStep(2);
          }
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

  const handleRegisterInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleCreateUser}
      noValidate
    >
      <AuthInput
        type="email"
        name="email"
        placeholder="E-posta"
        value={inputs.email}
        onChange={handleRegisterInput}
      />

      <AuthInput
        type="password"
        name="password"
        placeholder="Şifre"
        value={inputs.password}
        onChange={handleRegisterInput}
      />

      <AuthToggle login={login} setLogin={setLogin} key={"AuthToggle"} />

      <Button
        buttonBackgroundColor="bg-[#375fff]"
        buttonTextColor="text-[#f7f7fc]"
        buttonText={login ? "Giriş Yap" : "Kayıt Ol"}
        className="mt-16 mx-auto w-[400px] max-[600px]:w-[380px] max-[400px]:w-[90%] py-4 disabled:bg-gray-500 disabled:cursor-not-allowed"
        disabled={!inputs.email || !inputs.password || !!user}
      />
    </form>
  );
};

export default AuthForm;
