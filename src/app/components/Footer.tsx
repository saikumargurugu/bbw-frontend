// components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0072ff",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <Typography variant="body1">© 2025 Badminton Association. All rights reserved.</Typography>
    </Box>
  );
}
