"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navBarTypes } from "../types";
import LogoWhite from "./Logo/LogoWhite";

export default function Navbar({ navLinks }: { navLinks: navBarTypes[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)"); // Directly use a media query string

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };  
  // Sidebar content for mobile view
  const drawer = (
    <Box className="w-60 p-2 bg-red-600 h-full text-white" role="presentation">
      <List>
        {navLinks.map((link: navBarTypes, idx: number) => (
          <ListItem
            key={idx}
            component="div"
            onClick={handleDrawerToggle}
            className="my-1 rounded-md hover:bg-red-700"
          >
            <Link href={link.href} className="text-md text-white w-full block px-2 py-2">
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={4}
      sx={{ backgroundColor: "#dc2626 !important" }} // Tailwind's red-600 hex
    >
      <Toolbar className="flex justify-between px-2">
        <LogoWhite variant={isMobile ? "min" : "full"} />

        {!isMobile ? (
          <div className="flex space-x-2">
            {navLinks.map((link, idx) => (
              <Button key={idx} color="inherit">
                <Link href={link.href} className="hover:text-yellow-300 text-white">
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        ) : (
          <IconButton
            onClick={handleDrawerToggle}
            edge="end"
            color="inherit"
            className="hover:bg-gray-300 rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}
