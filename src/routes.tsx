import { createBrowserRouter } from "react-router-dom";
import GettingStarted from "./pages/GettingStarted.tsx"
import PhoneNumber from "./pages/CreateAccount.tsx";
import Chat from "./pages/Chat.tsx";

export const MainRouter = createBrowserRouter([
    { path: "/", element: <GettingStarted /> },
    { path: "/hesap-olustur", element: <PhoneNumber /> },
    { path: "/sohbet", element: <Chat /> }
])