import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutButton = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const setIsLoggedIn = authContext.setIsLoggedIn;
  const setIsAdminLoggedIn = authContext.setIsAdminLoggedIn;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdminLoggedIn(false);
    localStorage.removeItem("products");
    navigate("/login", { replace: true });
  };

  return (
    <div>
      {authContext.isLoggedIn && (
        <Button
          onClick={handleLogout}
          variant="outline-danger"
          className="d-flex align-items-center gap-2 px-3 py-1.5 fw-semibold bg-white text-danger text-uppercase font-monospace hover-shadow transition"
          style={{ fontSize: "11px", letterSpacing: "0.5px" }}
        >
          <span>Log Out</span>
        </Button>
      )}
    </div>
  );
};

export default LogoutButton;
