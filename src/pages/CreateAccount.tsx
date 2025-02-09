import { deleteUser, onAuthStateChanged } from "firebase/auth";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";
import Profile from "../components/Profile/Profile";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import LoginImageText from "../components/CreateAccount/LoginImageText";
import AuthStepImage from "../components/CreateAccount/AuthStepImage";
import AuthStepDescription from "../components/CreateAccount/AuthStepDescription";
import AuthForm from "../components/CreateAccount/AuthForm/AuthForm";
import BackToPrevious from "../components/CreateAccount/BackToPrevious";

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
    let refreshTimeout: NodeJS.Timeout;
    let countRefresh: number = JSON.parse(
      localStorage.getItem("countRefresh") || "0"
    );

    onAuthStateChanged(auth, (user) => {
      if (user && user?.emailVerified && user.displayName) {
        navigate("/sohbet");
      }

      if (user && !user.emailVerified && countRefresh >= 0) {
        refreshTimeout = setTimeout(() => {
          window.location.reload();
          localStorage.setItem(
            "countRefresh",
            JSON.stringify(Number(countRefresh + 1))
          );
        }, 5000);
      }

      if (user && !user.emailVerified && countRefresh == 0) {
        toast(
          "Spam hesapları engellemek için e-posta onayı yapılmazsa hesabınız 30 saniye içinde silinecektir.",
          {
            duration: 10000,
            icon: "⚠️",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }
        );
      }

      if (countRefresh == 6) {
        if (user) {
          deleteUser(user).then(() =>
            toast(
              <div className="text-center">
                <p>
                  <strong className="font-semibold">
                    ⚠️ Hesabınız Güvenlik Nedeniyle Silindi!
                  </strong>
                </p>
                <br />
                <p>
                  Platformun güvenliğini sağlamak amacıyla, e-posta adresinizi
                  onaylamadığınız için hesabınız otomatik olarak silinmiştir.
                </p>
                <br /> <br />
                <p>🔄 Yeni bir hesap oluşturarak tekrar kayıt olabilirsiniz.</p>
              </div>,
              {
                duration: 10000,
                style: {
                  background: "#333",
                  fontSize: "14px",
                  color: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                },
              }
            )
          );

          toast.dismiss();
          clearTimeout(refreshTimeout);
          localStorage.setItem(
            "countRefresh",
            JSON.stringify(Number((countRefresh = 0)))
          );
        }
      }

      if (user && user.emailVerified && !user.displayName) {
        toast.dismiss();
        toast.success("Doğrulama başarılı!");
        clearTimeout(refreshTimeout);
        localStorage.setItem(
          "countRefresh",
          JSON.stringify(Number((countRefresh = 0)))
        );

        setTimeout(() => {
          setAuthStep(2);
        }, 3000);
      }
    });
  }, [navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (user == null || user.displayName == null || !user.emailVerified) {
    return (
      <React.Fragment>
        {authStep == 1 ? (
          <div>
            <BackToPrevious />

            <div className="flex flex-col items-center text-center justify-center h-screen">
              <div className="relative">
                <LoginImageText login={login} key={"LoginImageText"} />

                <AuthStepImage login={login} key={"AuthStepImage"} />
              </div>

              <AuthStepDescription login={login} key={"AuthStepDescription"} />

              <div className="mt-14 w-[400px] max-[400px]:w-[90%] max-[600px]:w-[380px]">
                <AuthForm
                  login={login}
                  setLogin={setLogin}
                  user={user}
                  inputs={inputs}
                  setInputs={setInputs}
                />
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
