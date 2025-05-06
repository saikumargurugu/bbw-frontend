// components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer({fotterText}:{fotterText:string}) {
  return (
    <Box
      sx={{
        backgroundColor: "#0072ff",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
      }}
    >
      <Typography variant="body1">{fotterText}</Typography>
    </Box>
  );
}
