"use client";


import React, { useState, useEffect } from "react";
import Layout from  "@/app/components/Layout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Default to light mode
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save theme to localStorage
  };

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <title>Badminton Association</title>
      </head>
      <body>
        <div>
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
