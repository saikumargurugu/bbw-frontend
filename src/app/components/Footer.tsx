// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Divider } from "@mui/material";
import data from "../pages/dataBrisbaneBadminton.json"; // Adjust path if needed
import { sportySectionTheme } from "../styles/sportyTheme";
import LogWhite from "./Logo/LogoWhite";

export default function Footer({ fotterText }: { fotterText: string }) {
  // Get all footer data from JSON
  const footerData = data.footer || {};
  const socials = footerData.socials || [];
  const links = footerData.links || [];
  const openingHours = footerData.openingHours || {
    weekdays: "Mon-Fri: 8:00am – 10:00pm",
    weekends: "Sat-Sun: 8:00am – 10:00pm",
    holidays: "Public Holidays: Open",
  };
  const contact = footerData.ContactUs || {};
  const address = contact.address || "";
  const phone = contact.phone || "+";
  const email = contact.email || "admin@badmintonbrisbane.com.au";

  return (
    <Box
      className={"w-full " + sportySectionTheme.section.className}
      sx={{
        background: sportySectionTheme.section.style.background,
        color: "white",
        textAlign: { xs: "center", md: "left" },
        padding: "32px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        rowGap: 2,
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full mb-4 md:mb-0 gap-8">
        {/* big logo should look bigger */}
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            mb: { xs: 2, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center"
          }}
        >
          <LogWhite variant="full" height={100} width={360} />
        </Box>
        {/* Contact & Socials */}
        <Box
          sx={{
            mx: { xs: 0, md: 4 },
            mb: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.5rem' } }}
            style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily, fontSize: '1.15rem' }}
          >
            Address:{" "}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none", WebkitTextDecorationLine: "none", MozTextDecorationLine: "none" }}
            >
              {address}
            </a>
            {/* <br />
            Phone:{" "}
            <a
              href={`tel:${phone}`}
              style={{ color: "white", textDecoration: "none", WebkitTextDecorationLine: "none", MozTextDecorationLine: "none" }}
            >
              {phone}
            </a> */}
            <br />
            Email:{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: "white", textDecoration: "none", WebkitTextDecorationLine: "none", MozTextDecorationLine: "none" }}
            >
              {email}
            </a>
          </Typography>
          {/* Socials */}

        </Box>
{/* socials */}
          <Box sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.3rem', md: '1.7rem' } }}>
            Follow Us On
          </Typography>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {/* Social Links */}
            {socials.map((social: any, idx: number) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontWeight: 600,
                  fontSize: 22,
                  marginRight: 16,
                }}
              >
                <Image
                  src={
                    social.name.toLowerCase().includes("instagram")
                      ? "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                      : social.name.toLowerCase().includes("facebook")
                      ? "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                      : social.name.toLowerCase().includes("whatsapp")
                      ? "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
                      : ""
                  }
                  alt={social.name}
                  width={24}
                  height={24}
                  style={{ filter: "invert(1)", marginRight: 6 }}
                  unoptimized
                />
                {social.name}
              </a>
            ))}
          </div>
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.3rem', md: '1.7rem' } }}
            style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}
          >
            Quick Links
          </Typography>
          {links.length > 0 ? (
            links.map((link: any, idx: number) => (
              <React.Fragment key={idx}>
                <Link
                  href={link.url}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 no-underline"
                  style={{ textDecoration: 'none', WebkitTextDecorationLine: 'none', MozTextDecorationLine: 'none' }}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                >
                  {link.text}
                </Link>
                <br />
              </React.Fragment>
            ))
          ) : (
            <>
              <Link href="/academy" style={{ color: "white", textDecoration: "underline" }}>
                Academy
              </Link>
              <br />
              <Link href="/services" style={{ color: "white", textDecoration: "underline" }}>
                Services
              </Link>
              <br />
              <Link href="/club" style={{ color: "white", textDecoration: "underline" }}>
                Club
              </Link>
              <br />
              <Link href="/court-hire" style={{ color: "white", textDecoration: "underline" }}>
                Court Hire
              </Link>
              <br />
              <Link href="/contact" style={{ color: "white", textDecoration: "underline" }}>
                Contact
              </Link>
            </>
          )}
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.3rem', md: '1.7rem' } }}
            style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}
          >
            Opening Hours
          </Typography>
          <Typography
            variant="body2"
            style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily, fontSize: '1.15rem' }}
          >
            {openingHours.weekdays}
            <br />
            {openingHours.weekends}
            <br />
            {openingHours.holidays}
          </Typography>
          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", fontSize: { xs: '1.1rem', md: '1.3rem' } }}
            style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}
          >
            {fotterText}
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
