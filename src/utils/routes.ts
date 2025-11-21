import { createBrowserRouter } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ResetPasswordPage } from "../pages/ResetPasswordPage";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
  {
    path: "/reset-password",
    Component: ResetPasswordPage,
  },
]);
