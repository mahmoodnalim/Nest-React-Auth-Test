import { FormikConfig, FormikValues, useFormik } from "formik";

function useFormValidation<Values extends FormikValues>(
  options: FormikConfig<Values>
) {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    getFieldProps,
    ...rest
  } = useFormik(options);
  const getFormFieldProps = (field: keyof Values) => ({
    onChange: handleChange,
    onBlur: handleBlur,
    value: values[field],
    helperText: touched[field] ? errors[field] : "",
    error: errors[field] && touched[field],
  });
  return { getFormFieldProps, ...rest };
}

export default useFormValidation;
