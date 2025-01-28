import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./scss/main.scss"
import { RouterProvider } from "react-router-dom";
import { MainRouter }from "./routes"
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={MainRouter}/>
  </Provider>
);
 