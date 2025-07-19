// components/Footer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer({ fotterText }: { fotterText: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "#dc2626 !important",
        color: "white",
        textAlign: { xs: "center", md: "left" },
        padding: "20px 0",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          mx: { xs: 0, md: 4 },
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Typography variant="body2">
          Address:{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=39+Quilton+Pl,+Crestmead+QLD+4132,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "underline" }}
          >
            39 Quilton Pl, Crestmead QLD 4132, Australia
          </a>
          <br />
          Phone:{" "}
          <a
            href="tel:+61433300506"
            style={{ color: "white", textDecoration: "underline" }}
          >
            +61 433 300 506
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:admin@badmintonbrisbane.com.au"
            style={{ color: "white", textDecoration: "underline" }}
          >
            admin@badmintonbrisbane.com.au
          </a>
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          mx: { xs: 0, md: 4 },
          textAlign: { xs: "center", md: "right" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        {fotterText}
      </Typography>
    </Box>
  );
}
