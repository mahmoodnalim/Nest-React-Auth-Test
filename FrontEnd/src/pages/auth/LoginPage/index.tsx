import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";
import { Alert, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledButton from "../../../assets/styles/styled/StyledButton";
import StyledDivider from "../../../assets/styles/styled/StyledDivider";
import StyledFormControl from "../../../assets/styles/styled/StyledFormControl";
import CustomCheckBox from "../../../components/CustomCheckBox";
import CustomTextInput from "../../../components/CustomTextInput";
import useFormValidation from "../../../hooks/useFormValidation";
import authService from "../../../services/authService";
import { loginFormValidationSchema } from "../../../utils/formValidationSchema";
import { StyledLoginOptionsContainer } from "./styled";

function LoginPage() {
  const navigate = useNavigate();
  const [alertError, setAlertError] = useState<string | null>(null);
  const [shouldRememberLogin, setShouldRememberLogin] = useState(false);
  const { getFormFieldProps, handleSubmit, dirty, isValid } = useFormValidation(
    {
      initialValues: { email: "", password: "" },
      validationSchema: loginFormValidationSchema,
      onSubmit: (data) => {
        authService
          .login(data)
          .then((res) => {
            authService.saveToken(res.data.token, shouldRememberLogin);
            navigate("/");
          })
          .catch((err) => setAlertError(err.data.message));
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2">Login</Typography>
      <StyledDivider />
      <StyledFormControl>
        {alertError != null && <Alert severity="error">{alertError}</Alert>}
      </StyledFormControl>
      <StyledFormControl>
        <CustomTextInput
          id="email"
          label="Email"
          icon={<EmailIcon />}
          {...getFormFieldProps("email")}
        />
      </StyledFormControl>
      <StyledFormControl>
        <CustomTextInput
          id="password"
          label="Password"
          type="password"
          icon={<LockIcon />}
          {...getFormFieldProps("password")}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledLoginOptionsContainer>
          <CustomCheckBox
            label="Remember Me"
            checked={shouldRememberLogin}
            onChange={(e) => setShouldRememberLogin(e.target.checked)}
          />
          <StyledButton LinkComponent={Link}>Forgot password</StyledButton>
        </StyledLoginOptionsContainer>
      </StyledFormControl>
      <StyledFormControl>
        <StyledButton
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          disabled={!dirty || !isValid}
        >
          Login
        </StyledButton>
      </StyledFormControl>
      <StyledFormControl>
        <Typography textAlign="start">
          Don't have an account ?{" "}
          <Link to="/auth/register">
            <StyledButton>Register</StyledButton>
          </Link>
        </Typography>
      </StyledFormControl>
    </form>
  );
}

export default LoginPage;
