import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAdminAuth({ children }) {
  const isAdminLoggedIn = useContext(AuthContext).isAdminLoggedIn;

  if (!isAdminLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
