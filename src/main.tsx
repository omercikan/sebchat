import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./scss/main.scss"
import { RouterProvider } from "react-router-dom";
import { MainRouter }from "./routes"

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={MainRouter}/>
);
