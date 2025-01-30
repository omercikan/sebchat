import { createBrowserRouter } from "react-router-dom";
import GettingStarted from "./pages/GettingStarted.tsx"
import Chat from "./pages/Chat.tsx";
import CreateAccount from "./pages/CreateAccount.tsx";

export const MainRouter = createBrowserRouter([
    { path: "/", element: <GettingStarted /> },
    { path: "/hesap-olustur", element: <CreateAccount /> },
    { path: "/sohbet", element: <Chat /> }
])