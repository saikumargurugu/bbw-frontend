// components/ContactForm.tsx
import React from "react";
import { TextField, Button, Grid } from "@mui/material";

export default function ContactForm() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
