import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Route.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import DonorListProvider from "./context/DonorListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DonorListProvider>
        <RouterProvider router={router} />
      </DonorListProvider>
    </AuthProvider>
  </StrictMode>
);
