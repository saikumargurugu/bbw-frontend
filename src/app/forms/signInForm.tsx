"use client";

import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import useUserLogin from "../api/auth/useUserLogin";
import { apiCall } from "../utils/api";

const SignInForm: React.FC<{ onSuccess: (message: string) => void; onError: (message: string) => void }> = ({
    onSuccess,
    onError,
}) => {
    const login = useUserLogin(); // Use the custom hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password mode

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (isForgotPassword) {
            // Handle forgot password functionality
            try {
                await await apiCall(
                    "/auth/forgot-password/",
                    "POST",
                    { email },
                ).then((res) => { 
                if (res ) {
                onSuccess("Password reset email sent successfully!");
                }
                else {
                    onError("Failed to send password reset email. Please try again.");
                }});
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                console.error("Error sending password reset email:", err);
                onError("Failed to send password reset email. Please try again.");
            }
        } else {
            // Handle login functionality
            try {
                const res= await login(email, password)
                if (res) {
                        onSuccess("Login successful!");
                    } else {
                        onError("Login failed. Please check your credentials.");
                    }
                }
         catch (err) {
                console.error("Login error:", err);
                onError("Login failed. Please check your credentials.");
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
            />
            {!isForgotPassword && (
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                />
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>
                {isForgotPassword ? "Send Reset Email" : "Sign In"}
            </Button>
            <Typography
                variant="body2"
                color="primary"
                align="center"
                sx={{ cursor: "pointer", mt: 1 }}
                onClick={() => setIsForgotPassword(!isForgotPassword)}
            >
                {isForgotPassword ? "Back to Sign In" : "Forgot Password?"}
            </Typography>
        </Box>
    );
};

export default SignInForm;