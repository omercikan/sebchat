import { createBrowserRouter } from "react-router-dom";
import GettingStarted from "./pages/GettingStarted.tsx"

export const MainRouter = createBrowserRouter([
    {
        path: "/", element: <GettingStarted />
    }
])