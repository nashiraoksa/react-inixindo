import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuth = localStorage.getItem("token");
  return isAuth ? children : <Navigate to="/login" />;
}
