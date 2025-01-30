import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./scss/main.scss";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        success: { duration: 3000 },
        error: { duration: 5000 },
      }}
    />
    <RouterProvider router={MainRouter} />
  </Provider>
);
