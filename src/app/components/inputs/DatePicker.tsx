"use client";

import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  label: string;
  value: Date | null;
  onChange: (event: { target: { name: string; value: Date | null } }) => void;
  placeholder?: string;
  minDate?: Date; 
  maxDate?: Date; 
  disabled?: boolean;
  helperText?: string;
  textFieldProps?: object;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TailwindInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick, onChange, placeholder, disabled }, ref) => (
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}`}
    />
  )
);

TailwindInput.displayName = "TailwindInput";

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  value,
  onChange,
  placeholder = "Select a date",
  disabled = false,
  helperText = "",
}) => {
  const handleChange = (date: Date | null) => {
    const validDate = date instanceof Date && !isNaN(date.getTime()) ? date : null;
    onChange({
      target: {
        name: label,
        value: validDate,
      },
    });
  };

  return (
    <div className="mb-4 relative"> {/* Add relative positioning */}
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <ReactDatePicker
        selected={value}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd"
        disabled={disabled}
        placeholderText={placeholder}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        scrollableYearDropdown
        customInput={<TailwindInput />}
        popperClassName="z-[9999]" // Set a high z-index for the popup
        calendarClassName="bg-white w-80 rounded-lg shadow-lg border border-gray-300 p-4 max-h-72 overflow-y-auto"
        dayClassName={(date) => {
          const baseClasses =
            "text-sm w-10 h-10 flex items-center justify-center rounded-md hover:bg-blue-100";
          const isToday = new Date().toDateString() === date.toDateString();
          const isSelected = value?.toDateString() === date.toDateString();
          return [
            baseClasses,
            isToday ? "border border-blue-400" : "",
            isSelected ? "bg-blue-600 text-white" : "text-gray-700",
          ]
            .filter(Boolean)
            .join(" ");
        }}
        popperPlacement="bottom-start"
        portalId="date-picker-portal"
        popperModifiers={[
            {
            name: "preventOverflow",
            options: {
                boundary: "viewport",
            },
            fn: () => ({}), 
            },
        ]}

      />
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default CustomDatePicker;
