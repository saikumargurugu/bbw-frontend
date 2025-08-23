"use client";

import React, { useState, useEffect, useRef } from "react";
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
import LogWhite from "./Logo/LogoWhite";
// import LogoBlack from "./Logo/LogoBlack";

const EASING = "cubic-bezier(0.22, 0.01, 0.36, 1)";

const navItemClass =
  "hover:text-yellow-300 text-white px-2 py-1 text-base font-medium transition-colors duration-200";

export default function Navbar({ navLinks }: { navLinks: navBarTypes[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [showInside, setShowInside] = useState(false);
  const isMobile = useMediaQuery("(max-width: 960px)");
  const hideTimeout = useRef<number | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((o) => !o);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const isTop = y <= 5;
      setAtTop(isTop);

      if (!isTop) {
        if (hideTimeout.current) {
          window.clearTimeout(hideTimeout.current);
          hideTimeout.current = null;
        }
        setShowInside(true);
      } else {
        if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
        hideTimeout.current = window.setTimeout(() => {
          setShowInside(false);
        }, 120);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    };
  }, []);

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
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: "rgba(20,20,20,0.15) !important",
          boxShadow: "none",
          transition: `background-color 0.6s ${EASING}, backdrop-filter 0.6s ${EASING}`,
          width: '100%',
          top: 0,
          left: 0,
        }}
      >
        <Toolbar className="flex justify-between px-2 relative">
          {/* inside content only when scrolled down */}
          <div
            className={`flex w-full items-center justify-between transition-all ${
              showInside
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            aria-label="inside-nav"
            style={{
              transition: `opacity 0.7s ${EASING}, transform 0.7s ${EASING}`,
              willChange: "transform, opacity",
            }}
          >
            <div
              style={{
                transition: `opacity 0.8s ${EASING}, transform 0.8s ${EASING}`,
                willChange: "transform, opacity",
              }}
            >
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
                        style={{
                          transition: `opacity 0.8s ${EASING}, transform 0.8s ${EASING}`,
                          transitionDelay: `${idx * 30}ms`,
                          willChange: "transform, opacity",
                        }}
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
      </AppBar>

      {/* Floating bar when at top: logo left, nav items right */}
      {atTop && (
        <div
          className="w-full flex justify-between items-center px-4 py-2 pointer-events-auto"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            zIndex: 50,
            transition: `opacity 0.8s ${EASING}, transform 0.8s ${EASING}`,
            background: "transparent",
            willChange: "opacity, transform",
          }}
          aria-label="floating-nav"
        >
          <div
            style={{
              transition: `opacity 0.8s ${EASING}, transform 0.8s ${EASING}`,
              willChange: "transform, opacity",
            }}
          >
            <LogWhite variant={isMobile ? "min" : "full"} />
          </div>
          <div className="flex items-center space-x-2">
            {!isMobile &&
              navLinks.map((link, idx) => (
                <React.Fragment key={idx}>
                  <Link
                    href={link.href}
                    className={navItemClass}
                    style={{
                      transition: `opacity 0.9s ${EASING}, transform 0.9s ${EASING}`,
                      transitionDelay: `${idx * 25}ms`,
                      willChange: "transform, opacity",
                    }}
                  >
                    {link.label}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="mx-1 text-white/60 select-none">|</span>
                  )}
                </React.Fragment>
              ))}
            {isMobile && (
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
      )}

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
