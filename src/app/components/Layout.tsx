// components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { layOutProps } from "../types";

export default function Layout({ children, layOutProps }: { children: React.ReactNode; layOutProps: layOutProps }) {  
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
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer fotterText={layOutProps.fotterText} />
    </div>
  );
}
