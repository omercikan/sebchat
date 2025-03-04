import { onAuthStateChanged } from "firebase/auth";
import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
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
    onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        navigate("/sohbet");
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
                  setAuthStep={setAuthStep}
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
