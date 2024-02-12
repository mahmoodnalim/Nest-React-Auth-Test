import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email field is required")
    .email("Email should be in a valid format"),
  password: Yup.string().required("Password field is required"),
});

export const registerFormValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name should have at least 3 letters"),
  email: Yup.string()
    .required("Email field is required")
    .email("Email should be in a valid format"),
  password: Yup.string()
    .required("Password field is required")
    .min(8, "Password should have at least 8 characters")
    .matches(/[a-z]+/gi, "Password should have at least 1 letter")
    .matches(
      /[*@!#%&()^~{}]+/gi,
      "Password should have at least 1 special characters"
    )
    .matches(/[0-9]+/gi, "Password should have at least 1 number"),
  confirmPassword: Yup.string()
    .required("Password confirmation field is required")
    .oneOf(
      [Yup.ref("password")],
      "Password confirmation does not match with Password"
    ),
});
