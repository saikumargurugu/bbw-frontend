"use client";

import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import axios from "axios";

const SignInForm: React.FC<{ onSuccess: (message: string) => void; onError: (message: string) => void }> = ({
    onSuccess,
    onError,
}) => {
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
    });

    const formConfig = [
        {
            type: "email",
            label: "Email",
            name: "email",
            required: true,
        },
        {
            type: "password",
            label: "Password",
            name: "password",
            required: true,
        },
    ];

    const buttonConfig = {
        label: "Sign In",
        type: "submit",
        variant: "contained",
        color: "primary",
        fullWidth: true,
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignInData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("/api/auth/signin/", signInData);
            onSuccess("Signed in successfully!");
        } catch (err: any) {
            onError(err.response?.data?.message || "Invalid email or password!");
        }
    };

    const renderField = (field: any) => {
        return (
            <TextField
                label={field.label}
                name={field.name}
                type={field.type}
                value={signInData[field.name]}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                size="small"
                required={field.required}
            />
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={3}>
                {formConfig.map((field, index) => (
                    <Grid item key={index}>
                        {renderField(field)}
                    </Grid>
                ))}
                <Grid item>
                    <Button
                        type={buttonConfig.type}
                        variant={buttonConfig.variant}
                        color={buttonConfig.color}
                        fullWidth={buttonConfig.fullWidth}
                    >
                        {buttonConfig.label}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SignInForm;