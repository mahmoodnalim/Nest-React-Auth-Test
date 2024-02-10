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
      <h1>Welcome to the Applications</h1>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
    </>
  );
}

export default HomePage;
