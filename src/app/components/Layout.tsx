// components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoBarComponent from "./InfoBar";
import { layOutProps } from "../types";

export default function Layout({ children, layOutProps }: { children: React.ReactNode; layOutProps: layOutProps }) {  
  const infoBarSample = {
  text: "Your Court. Your Time, Get Involved?",
  buttons: [
    { 
        label: "Book Court",
        newTab: true,
        url: "https://badmintonbrisbane.yepbooking.com.au/" 
      },
  ]
};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#18181b",
        color: "#f3f4f6", // light text
        minHeight: "100vh"
      }}
      className="dark"
    >
      <Navbar navLinks={layOutProps.navLinks} />
      {/* Small full-width info bar with buttons */}
      {infoBarSample && (
          <InfoBarComponent infoBar={infoBarSample} />
      )}
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer fotterText={layOutProps.fotterText} />
    </div>
  );
}
