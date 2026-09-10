import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const isLoggedIn = useContext(AuthContext).isLoggedIn;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
