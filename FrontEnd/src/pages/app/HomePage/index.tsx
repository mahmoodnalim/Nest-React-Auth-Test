import { useNavigate } from "react-router-dom";
import StyledButton from "../../../assets/styles/styled/StyledButton";
import authService from "../../../services/authService";

function HomePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.removeToken();
    navigate("/auth/login");
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <h1>Welcome to the Application</h1>
        <StyledButton onClick={handleLogout}>Logout</StyledButton>
      </div>
    </>
  );
}

export default HomePage;
