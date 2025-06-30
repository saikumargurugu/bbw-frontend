"use client";

import React, { useState } from "react";
import TextInput from "../components/inputs/TextInput";
import FileInput from "../components/inputs/FileInput";
import CustomDatePicker from "../components/inputs/DatePicker";
import AddressInput from "../components/inputs/AddressInput";
import { apiCall } from "../utils/api"; // Import the apiCall function

interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

const SignUpForm: React.FC<{ onSuccess: (message: string) => void; onError: (message: string) => void }> = ({
    onSuccess,
    onError,
}) => {
    const [formData, setFormData] = useState<{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    }>({
        username: "",
        email: "",
        phone: "",
        date_of_birth: null,
        address: {
            street: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
        },
        profile_picture: null,
    });

    const [loading, setLoading] = useState(false); // State to manage loading

    const formConfig = [
        {
            type: "text",
            label: "Username",
            name: "username",
            required: true,
        },
        {
            type: "email",
            label: "Email",
            name: "email",
            required: true,
        },
        {
            type: "tel",
            label: "Phone",
            name: "phone",
        },
        {
            type: "date",
            label: "Date of Birth",
            name: "date_of_birth",
            component: "CustomDatePicker",
        },
        {
            type: "address",
            label: "Address",
            name: "address",
            component: "AddressInput",
        },
    ];

    const buttonConfig: {
            label: string;
            type: "button" | "submit" | "reset";
            variant: "contained";
            color: "primary";
            fullWidth: boolean;
            disabled: boolean;
        } = {
            label: loading ? "Signing Up..." : "Sign Up", // Show loading text
            type: "submit",
            variant: "contained",
            color: "primary",
            fullWidth: true,
            disabled: loading, // Disable button while loading
        };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData((prev) => ({ ...prev, profile_picture: file }));
        }
    };


    const handleDateChange = (event: { target: { name: string; value: Date | null } }) => {
        const { value } = event.target;        
        setFormData((prev) => ({ ...prev, date_of_birth: value }));
    };

    const handleAddressChange = (address: Address) => {
        setFormData((prev) => ({ ...prev, address }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading to true

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === "address" && typeof value === "object") {
                // Flatten address object into individual fields
                Object.entries(value).forEach(([addressKey, addressValue]) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    formDataToSend.append(`address[${addressKey}]`, addressValue as any);
                });
            } else if (value !== null) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                formDataToSend.append(key, value as any);
            }
        });

        try {
            const response = await apiCall("/auth/signup/", "POST", formDataToSend) as { message: string };
            onSuccess(response.message || "User registered successfully!");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            onError(err || "Something went wrong!");
        } finally {
            setLoading(false); // Set loading to false
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderField = (field: any) => {
        switch (field.component) {
            case "CustomDatePicker":
                return (
                    <CustomDatePicker
                        label={field.label}
                        value={formData[field.name]}
                        onChange={handleDateChange}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        helperText={`Please select your ${field.label.toLowerCase()}`}
                        minDate={new Date("1900-01-01")} // Minimum date
                        maxDate={new Date()} // Maximum date (today)                
                        textFieldProps={{
                            variant: "outlined",
                            size: "small",
                            fullWidth: true,
                        }}
                    />
                );
            case "AddressInput":
                return <AddressInput onChange={handleAddressChange} />;
            case "FileInput":
                return (
                    <FileInput
                        name={field.name}
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                );
            default:
                return (
                    <TextInput
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                    />
                );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px", // spacing={3} in MUI is 24px
                }}
            >
                {formConfig.map((field, index) => (
                    <div key={index} style={{ width: "100%" }}>
                        {renderField(field)}
                    </div>
                ))}
                <div style={{ width: "100%" }}>
                    <button
                        type={buttonConfig.type}
                        disabled={buttonConfig.disabled}
                        style={{
                            width: "100%",
                            padding: "8px 16px",
                            backgroundColor: buttonConfig.disabled ? "#90caf9" : "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "1rem",
                            fontWeight: 500,
                            cursor: buttonConfig.disabled ? "not-allowed" : "pointer",
                            transition: "background 0.2s",
                        }}
                    >
                        {buttonConfig.label}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;