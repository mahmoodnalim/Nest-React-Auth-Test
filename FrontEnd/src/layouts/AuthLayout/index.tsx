import { Outlet } from "react-router-dom";
import { StyledAuthForm, StyledFormContainer } from "./styled";

function AuthLayout() {
  return (
    <StyledFormContainer>
      <StyledAuthForm>
        <Outlet />
      </StyledAuthForm>
    </StyledFormContainer>
  );
}

export default AuthLayout;
