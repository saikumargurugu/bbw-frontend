// components/ContactForm.tsx
import React from "react";
import { TextField, Button } from "@mui/material";

export default function ContactForm() {
  return (
    <form
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <TextField fullWidth label="Name" variant="outlined" style={{ gridColumn: "1" }} />
      <TextField fullWidth label="Email" variant="outlined" style={{ gridColumn: "2" }} />
      <TextField
        fullWidth
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        style={{ gridColumn: "1 / span 2" }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ gridColumn: "1 / span 2" }}
      >
        Send Message
      </Button>
    </form>
  );
}
