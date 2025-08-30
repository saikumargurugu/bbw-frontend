"use client";

import React, {useState} from "react";
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
import Logo from "./Logo/Logo";
import { sportyButton } from "../styles/sportyTheme";

const EASING = "cubic-bezier(0.22, 0.01, 0.36, 1)";

const navItemClass =
  "hover:text-yellow-300 text-white px-2 py-1 text-base font-medium transition-colors duration-200";

export default function Navbar({ navLinks }: { navLinks: navBarTypes[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)");
  const handleDrawerToggle = () => {
    setMobileOpen((o) => !o);
  };

  const drawer = (
    <Box className="w-60 p-2 bg-black h-full text-white" role="presentation">
      <List className="flex flex-col gap-2">
        {navLinks.map((link: navBarTypes, idx: number) => (
          <ListItem
            key={idx}
            component="div"
            onClick={handleDrawerToggle}
            disablePadding
            className="px-0"
          >
            <Link
              href={link.href}
              className={
                navItemClass +
                " w-full block px-4 py-2 text-lg font-bold transition-all duration-200 " +
                "bg-gradient-to-r from-red-700 to-black " +
                "rounded-none " +
                "hover:from-red-500 hover:to-black " +
                "shadow-md "
              }
              style={{
                clipPath:
                  "polygon(8% 0, 100% 0, 92% 100%, 0% 100%)", // sharp parallelogram
                color: "white",
                fontFamily: "inherit",
                fontWeight: 700,
                letterSpacing: 0.5,
                marginBottom: idx < navLinks.length - 1 ? 10 : 0,
              }}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
          transition: `background-color 0.6s ${EASING}, backdrop-filter 0.6s ${EASING}`,
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
        <div className="sticky top-0 z-[1200] w-full">
          <Toolbar className="flex justify-between px-2 relative">
            <div className="flex w-full items-center justify-between">
              <div>
                <Logo variant={isMobile ? "min" : "full"} />
              </div>
              <div className="flex items-center gap-4">
                {!isMobile ? (
                  <div className="flex items-center space-x-2">
                    {navLinks.map((link, idx) => (
                      <React.Fragment key={idx}>
                        <Link
                          href={link.href}
                          className={navItemClass}
                        >
                          {link.label}
                        </Link>
                        {idx < navLinks.length - 1 && (
                          <span className="mx-1 text-white/60 select-none">|</span>
                        )}
                      </React.Fragment>
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
              </div>
            </div>
          </Toolbar>
        </div>
      </AppBar>




      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
