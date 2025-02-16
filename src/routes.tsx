import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";

const GettingStarted = React.lazy(() => import("./pages/GettingStarted.tsx"));
const CreateAccount = React.lazy(() => import("./pages/CreateAccount.tsx"));
const Chat = React.lazy(() => import("./pages/Chat.tsx"));

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <GettingStarted />
      </Suspense>
    ),
  },
  {
    path: "/hesap-olustur",

    element: (
      <Suspense fallback={<Loading />}>
        <CreateAccount />
      </Suspense>
    ),
  },
  {
    path: "/sohbet",
    element: (
      <Suspense fallback={<Loading />}>
        <Chat />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
