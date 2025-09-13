// components/HeroSection.tsx
import React from "react";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { sportySectionTheme } from '../styles/sportyTheme';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: sportySectionTheme.font.title.style.fontFamily,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}
      >
        Welcome to Our Badminton Club
      </motion.h2>
      <Box
        sx={{ fontSize: "1.2rem", fontFamily: sportySectionTheme.font.description.style.fontFamily }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}
        >
          Train. Compete. Connect. Elevate your game with us.
        </motion.p>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "20px",
          padding: "10px 30px",
          fontFamily: sportySectionTheme.font.button.style.fontFamily,
        }}
      >
        Join Now
      </Button>
    </Box>
  );
}
