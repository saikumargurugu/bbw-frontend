// components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { layOutProps } from "../types";

export default function Layout({ children, layOutProps }: { children: React.ReactNode; layOutProps: layOutProps }) {
  console.log("Layout Props:in NavBar", layOutProps);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar navLinks={layOutProps.navLinks} />
      <main style={{ flex: 1 }}>
        {/* Page content */}
        {children}
      </main>
      <Footer fotterText={layOutProps.fotterText} />
    </div>
  );
}
