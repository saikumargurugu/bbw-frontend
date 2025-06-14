"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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

export default function Navbar({ navLinks }: { navLinks: navBarTypes[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)"); // Directly use a media query string

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  console.log("navLinks in NavBar:", navLinks);
  
  // Sidebar content for mobile view
  const drawer = (
    <Box className="w-60 p-2 bg-white dark:bg-gray-900 h-full" role="presentation">
      <List>
        {navLinks.map((link: navBarTypes, idx: number) => (
          <ListItem
            key={idx}
            component="div"
            onClick={handleDrawerToggle}
            className="my-1 rounded-md hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors px-2"
          >
            <Link href={link.href} className="text-md text-gray-800 dark:text-gray-200">
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="bg-gradient-to-r from-cyan-700 to-blue-500 shadow-md">
      <Toolbar className="flex justify-between px-2">
        <Typography variant="h6" className="font-bold text-white">
          🏸 Badminton Association
        </Typography>

        {!isMobile ? (
          <div className="flex space-x-2">
            {navLinks.map((link, idx) => (
              <Button key={idx} color="inherit">
                <Link href={link.href} className="hover:text-yellow-300 transition-colors">
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
