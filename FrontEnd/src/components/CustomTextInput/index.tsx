import { InputAdornment, TextFieldProps } from "@mui/material";
import StyledInput from "../../assets/styles/styled/StyledInput";

type CustomTextInputProps = TextFieldProps & {
  icon: React.ReactElement;
};

function CustomTextInput(props: CustomTextInputProps) {
  const { id, icon } = props;
  return (
    <StyledInput
      {...props}
      id={id}
      name={id}
      InputProps={{
        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
      }}
    />
  );
}

export default CustomTextInput;
