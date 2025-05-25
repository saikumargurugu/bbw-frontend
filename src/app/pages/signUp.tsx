"use client";

import React, { useState } from "react";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import SignInForm from "../forms/signInForm";
import SignUpForm from "../forms/signUpForm";

const SignUp: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        setError(null);
        setSuccess(null);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
                <Tabs value={activeTab} onChange={handleTabChange} centered>
                    <Tab label="Sign Up" />
                    <Tab label="Sign In" />
                </Tabs>

                {activeTab === 0 && (
                    <SignUpForm
                        onSuccess={(message) => setSuccess(message)}
                        onError={(message) => setError(message)}
                    />
                )}

                {activeTab === 1 && (
                    <SignInForm
                        onSuccess={(message) => setSuccess(message)}
                        onError={(message) => setError(message)}
                    />
                )}

                {error && (
                    <Typography color="error" sx={{ mt: 2 }} align="center">
                        {error}
                    </Typography>
                )}
                {success && (
                    <Typography color="success" sx={{ mt: 2 }} align="center">
                        {success}
                    </Typography>
                )}
            </Paper>
        </Box>
    );
};

export default SignUp;