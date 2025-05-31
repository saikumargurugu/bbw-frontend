// components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { layOutProps } from "../types";




export default function Layout({ children, layOutProps }: { children: React.ReactNode, layOutProps: layOutProps }) {
  return (
    <div>
      <Navbar navLinks = {layOutProps.navLinks} />
      <div>{children}</div>
      <Footer fotterText={layOutProps.fotterText} />
    </div>
  );
}
