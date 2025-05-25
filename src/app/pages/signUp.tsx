"use client";

import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";
import TextInput from "../components/inputs/TextInput";
import FileInput from "../components/inputs/FileInput";
import CustomDatePicker from "../components/inputs/DatePicker";
import AddressInput from "../components/inputs/AddressInput";

interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<{
        username: string;
        email: string;
        phone: string;
        date_of_birth: Date | null;
        address: Address;
        profile_picture: File | null;
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
            postalCode: ""
        },
        profile_picture: null,
    });


    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleAddressChange = (address: any) => {
        setFormData((prev) => ({ ...prev, address }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, profile_picture: e.target.files[0] }));
        }
    };

    const handleDateChange = (date: Date | null) => {
        setFormData((prev) => ({ ...prev, date_of_birth: date }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) {
                formDataToSend.append(key, value as any);
            }
        });

        try {
            await axios.post("/api/auth/signup/", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setSuccess("User registered successfully!");
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", padding: 4 }}>
            <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextInput
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                label="Phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomDatePicker
                                label="Date of Birth"
                                value={formData.date_of_birth}
                                onChange={handleDateChange}
                                includeTime={false}
                                placeholder="Enter your date of birth"
                                helperText="Please select your date of birth"
                                textFieldProps={{
                                    variant: "outlined",
                                    size: "small",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <AddressInput onChange={handleAddressChange} />
                            <pre>{JSON.stringify(formData.address, null, 2)}</pre> For debugging

                        </Grid>
                        <Grid item xs={12}>
                            <FileInput name="profile_picture" onChange={handleFileChange} accept="image/*" />
                            {formData.profile_picture && (
                                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                    Selected file: {formData.profile_picture.name}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </form>
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