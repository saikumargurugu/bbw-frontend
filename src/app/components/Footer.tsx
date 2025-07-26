// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Box, Typography, Divider } from "@mui/material";

export default function Footer({ fotterText }: { fotterText: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "#dc2626 !important",
        color: "white",
        textAlign: { xs: "center", md: "left" },
        padding: "32px 0 0 0",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "flex-start" },
        flexWrap: "wrap",
        rowGap: 2,
      }}
    >
      {/* Contact & Address */}
      <Box
        sx={{
          mx: { xs: 0, md: 4 },
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "33%" },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Contact Us
        </Typography>
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

      {/* Quick Links */}
      <Box
        sx={{
          mx: { xs: 0, md: 4 },
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "20%" },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Quick Links
        </Typography>
          <Link
            href="/academy"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Academy
          </Link>
          <br />
          <Link
            href="/services"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Services
          </Link>
          <br />
          <Link
            href="/club"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Club
          </Link>
          <br />
          <Link
            href="/court-hire"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Court Hire
          </Link>
          <br />
          <Link
            href="/contact"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Contact
          </Link>
      </Box>

      {/* About/Hours */}
      <Box
        sx={{
          mx: { xs: 0, md: 4 },
          mb: { xs: 2, md: 0 },
          textAlign: { xs: "center", md: "left" },
          width: { xs: "100%", md: "33%" },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Opening Hours
        </Typography>
        <Typography variant="body2">
          Mon-Fri: 9:00am – 10:00pm
          <br />
          Sat-Sun: 8:00am – 10:00pm
          <br />
          Public Holidays: Open
        </Typography>
        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {fotterText}
        </Typography>
      </Box>
    </Box>
  );
}
