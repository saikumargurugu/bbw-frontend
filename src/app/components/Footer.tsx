// components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer({ fotterText }: { fotterText: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "#dc2626 !important",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        width: "100%", // Ensure it spans the full width
      }}
    >
      <Typography variant="body1">{fotterText}</Typography>
    </Box>
  );
}
