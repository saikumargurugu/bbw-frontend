// components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🏸 Badminton Association
        </Typography>
        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link href="/club">Club</Link>
        </Button>
        <Button color="inherit">
          <Link href="/services">Services</Link>
        </Button>
        <Button color="inherit">
          <Link href="/academy">Academy</Link>
        </Button>
        <Button color="inherit">
          <Link href="/court-hire">Court Hire</Link>
        </Button>
        <Button color="inherit">
          <Link href="/socials">Socials</Link>
        </Button>
        <Button color="inherit">
          <Link href="/contact">Contact</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
