"use client";

import { TextField as DefaultTextField, TextFieldProps } from "@mui/material";

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(var(--foreground-rgb), 0.5)",
    },
    "&:hover fieldset": { borderColor: "rgb(var(--foreground-rgb))" },
  },
  label: { color: "rgb(var(--foreground-rgb))" },
  input: { color: "rgb(var(--foreground-rgb))" },
  textarea: { color: "rgb(var(--foreground-rgb))" },
} satisfies TextFieldProps["sx"];

export default function TextField({
  sx,
  ...props
}: TextFieldProps): JSX.Element {
  return <DefaultTextField sx={{ ...textFieldStyles, ...sx }} {...props} />;
}
