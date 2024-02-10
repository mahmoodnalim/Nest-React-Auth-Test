import { Navigate, Outlet } from "react-router-dom";
import { StyledContainer } from "./styled";
import authService from "../../services/authService";

function MainLayout() {
  const getToken = ()=>{
   return authService.getToken()
  }
  return (

    <StyledContainer>
      {getToken()? <Outlet />: <Navigate to="auth/login"/> }
     
    </StyledContainer>
  );
}

export default MainLayout;
