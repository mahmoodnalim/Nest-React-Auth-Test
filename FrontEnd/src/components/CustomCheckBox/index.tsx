import { FormControlLabel, CheckboxProps, Checkbox } from "@mui/material";

type CustomCheckBoxProps = CheckboxProps & {
  label: string;
};

function CustomCheckBox(props: CustomCheckBoxProps) {
  const { id, label } = props;
  return (
    <FormControlLabel
      label={label}
      htmlFor={id}
      control={<Checkbox {...props} name={id} />}
    />
  );
}

export default CustomCheckBox;
