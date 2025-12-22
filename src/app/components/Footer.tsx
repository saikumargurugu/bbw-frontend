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
  // const phone = contact.phone || "+";
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
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 4,
      }}
    >
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full md:mb-0 ">
        {/* big logo should look bigger */}
        <Box
          sx={{
            flex: "0 1 auto",
            minWidth: 0,
            mb: { xs: 2, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center"
          }}
        >
          <LogWhite variant="full" height={100} width={360} />
        </Box>
        {/* Contact & Socials (aligned headings) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 0, md: 6 },
            flex: '0 1 auto',
            minWidth: 0,
            mx: { xs: 0, md: 4 },
            mb: { xs: 2, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
            width: 'auto',
          }}
        >
          {/* Contact Us */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '100%' }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.05rem', md: '1.2rem' }, textAlign: 'left', color: 'white', minWidth: 140, pl: 0, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
                style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily, textAlign: 'left', color: 'white', minWidth: 140, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
              >
                Contact Us
              </Typography>
            </div>
            <Typography
              variant="body2"
              sx={{
                fontFamily: sportySectionTheme.font.description.style.fontFamily,
                fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: 0.5,
                width: '100%',
                textAlign: { xs: 'center', md: 'left' },
                lineHeight: 1.7,
                mt: 1
              }}
            >
              <span style={{ display: 'flex', alignItems: 'baseline', minWidth: 80 }}>
                <span style={{ minWidth: 70, display: 'inline-block' }}>Address:</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none", marginLeft: 4, wordBreak: 'break-word' }}
                >
                  {address}
                </a>
              </span>
              {/* <span style={{ display: 'flex', alignItems: 'baseline', minWidth: 80 }}>
                <span style={{ minWidth: 70, display: 'inline-block' }}>Phone:</span>
                <a
                  href={`tel:${phone}`}
                  style={{ color: "white", textDecoration: "none", marginLeft: 4 }}
                >
                  {phone}
                </a>
              </span> */}
              <span style={{ display: 'flex', alignItems: 'baseline', minWidth: 80 }}>
                <span style={{ minWidth: 70, display: 'inline-block' }}>Email:</span>
                <a
                  href={`mailto:${email}`}
                  style={{ color: "white", textDecoration: "none", marginLeft: 4, wordBreak: 'break-all' }}
                >
                  {email}
                </a>
              </span>
            </Typography>
          </Box>
          {/* Socials */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, minWidth: 0, mt: { xs: 3, md: 0 } }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '100%' }}>
              <Typography
                variant="h6"
                  sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.05rem', md: '1.2rem' }, textAlign: 'left', color: 'white', minWidth: 140, pl: 0, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
                  style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily, textAlign: 'left', color: 'white', minWidth: 140, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
              >
                Follow Us On
              </Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, width: '100%' }}>
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
                    fontSize: 18,
                    marginBottom: 2,
                    width: '100%',
                    minWidth: 0,
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
                    width={20}
                    height={20}
                    style={{ filter: "invert(1)", marginRight: 6 }}
                    unoptimized
                  />
                  {social.name}
                </a>
              ))}
            </div>
          </Box>
        </Box>
        {/* Quick Links */}
        <Box
          sx={{
            flex: "1 1 160px",
            minWidth: 140,
            mx: { xs: 2, md: 6 }, // Move right a bit more
            mb: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '100%' }}>
            <Typography
              variant="h6"
                  sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.05rem', md: '1.2rem' }, textAlign: 'left', color: 'white', minWidth: 140, pl: 0, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
                  style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily, textAlign: 'left', color: 'white', minWidth: 140, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
            >
              Quick Links
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, alignItems: 'flex-start' }}>
            {links.length > 0 ? (
              links.map((link: any, idx: number) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 no-underline"
                  style={{ textDecoration: 'none', WebkitTextDecorationLine: 'none', MozTextDecorationLine: 'none', marginBottom: 0 }}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                >
                  {link.text}
                </Link>
              ))
            ) : (
              <>
                <Link href="/academy" style={{ color: "white", textDecoration: "underline", marginBottom: 0 }}>
                  Academy
                </Link>
                <Link href="/services" style={{ color: "white", textDecoration: "underline", marginBottom: 0 }}>
                  Services
                </Link>
                <Link href="/club" style={{ color: "white", textDecoration: "underline", marginBottom: 0 }}>
                  Club
                </Link>
                <Link href="/court-hire" style={{ color: "white", textDecoration: "underline", marginBottom: 0 }}>
                  Court Hire
                </Link>
                <Link href="/contact" style={{ color: "white", textDecoration: "underline", marginBottom: 0 }}>
                  Contact
                </Link>
              </>
            )}
          </div>
        </Box>

        {/* About/Hours */}
        <Box
          sx={{
            flex: "0 1 auto",
            minWidth: 0,
            mx: { xs: 0, md: 4 },
            mb: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', width: '100%' }}>
            <Typography
              variant="h6"
                  sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.05rem', md: '1.2rem' }, textAlign: 'left', color: 'white', minWidth: 140, pl: 0, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
                  style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily, textAlign: 'left', color: 'white', minWidth: 140, lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: 4 }}
            >
              Opening Hours
            </Typography>
          </div>
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

        </Box>
      </div>
          {/* <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} /> */}
          {/* <Typography
            variant="body2"
            sx={{ fontStyle: "italic", fontSize: { xs: '1.1rem', md: '1.3rem' } }}
            style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}
          > */}
            <p style={{ textAlign: 'center', width: '100%', margin: 0 }}>{fotterText}</p>
          {/* </Typography> */}
    </Box>
  );
}
