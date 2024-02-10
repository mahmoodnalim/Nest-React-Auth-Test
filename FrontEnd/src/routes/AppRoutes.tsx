import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/Register";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/app/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
