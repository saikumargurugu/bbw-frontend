"use client";

import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles
import { TextField, TextFieldProps } from "@mui/material";

interface CustomDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (event: { target: { name: string; value: Date | null } }) => void; // Use a custom event type
  includeTime?: boolean; // Whether to include time selection
  placeholder?: string; // Placeholder for the input field
  disabled?: boolean; // Disable the date picker
  helperText?: string; // Helper text for the input field
  textFieldProps?: TextFieldProps; // Additional props for the TextField
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  includeTime = false,
  placeholder = "Select a date",
  disabled = false,
  helperText = "",
  textFieldProps = {},
}) => {
  const handleChange = (date: Date | null) => {
    // Create a synthetic event to pass to the parent
    const syntheticEvent = {
      target: {
        name: label,
        value: date,
      },
    };

    onChange(syntheticEvent); // Pass the synthetic event to the parent
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <ReactDatePicker
        selected={value}
        onChange={(date) => handleChange(date)} // Pass only the date
        showTimeSelect={includeTime} // Enable time selection if includeTime is true
        dateFormat={includeTime ? "Pp" : "P"} // Format with or without time
        disabled={disabled} // Disable the date picker if needed
        placeholderText={placeholder} // Set the placeholder
        customInput={
          <TextField
            label={label}
            fullWidth
            helperText={helperText}
            {...textFieldProps} // Spread additional TextField props
          />
        }
      />
    </div>
  );
};

export default CustomDatePicker;