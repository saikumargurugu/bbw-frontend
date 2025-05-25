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

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={signInData.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={signInData.password}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        size="small"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SignInForm;