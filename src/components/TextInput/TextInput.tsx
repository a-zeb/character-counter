import type { TextInputProps } from "../../types";
import { TextField } from "@mui/material";

// Create a TextInput component
// that handles user input and communicates changes to its parent.

export const TextInput = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}: TextInputProps) => {
  return (
    <TextField
      maxRows={15}
      fullWidth
      multiline={true}
      aria-label="maximum height"
      placeholder={placeholder}
      defaultValue={initialValue}
      minRows={6}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
};
