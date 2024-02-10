import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Alert, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import StyledButton from "../../../assets/styles/styled/StyledButton";
import StyledDivider from "../../../assets/styles/styled/StyledDivider";
import StyledFormControl from "../../../assets/styles/styled/StyledFormControl";
import CustomTextInput from "../../../components/CustomTextInput";
import useFormValidation from "../../../hooks/useFormValidation";
import { registerFormValidationSchema } from "../../../utils/formValidationSchema";
import authService from "../../../services/authService";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();
  const [alertError, setAlertError] = useState<string | null>(null);
  const { getFormFieldProps, handleSubmit, dirty, isValid } = useFormValidation(
    {
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: registerFormValidationSchema,
      onSubmit: (data) => {
        authService
          .register(data)
          .then((res) => {
            authService.saveToken(res.data.token);
            navigate("/");
          })
          .catch((err) => {
            console.log("Error", err);
            setAlertError(err.data.message);
          });
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2">Register</Typography>
      <StyledDivider />
      <StyledFormControl>
        {alertError != null && <Alert severity="error">{alertError}</Alert>}
      </StyledFormControl>
      <StyledFormControl>
        <CustomTextInput
          id="fullName"
          label="Full Name"
          icon={<PersonIcon />}
          {...getFormFieldProps("fullName")}
        />
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
        <CustomTextInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          icon={<LockIcon />}
          {...getFormFieldProps("confirmPassword")}
        />
      </StyledFormControl>
      <StyledFormControl>
        <StyledButton
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={!dirty || !isValid}
        >
          Register
        </StyledButton>
      </StyledFormControl>
      <StyledFormControl>
        <Typography textAlign="start">
          Already have an account ?
          <Link to="/auth/login">
            <StyledButton>Log in</StyledButton>
          </Link>
        </Typography>
      </StyledFormControl>
    </form>
  );
}

export default RegisterPage;
