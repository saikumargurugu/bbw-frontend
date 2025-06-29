"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/app/components/Layout";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./redux-store/store";
import "react-toastify/dist/ReactToastify.css";
import { fetchLayoutRoutes } from "./api/redux-store/actions/generalActions";
import Loader from "./components/Loader";
import MainComponent from "./MainComponent";


  const layOutProps = {
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Club", href: "/club" },
      { label: "Services", href: "/services" },
      { label: "Academy", href: "/academy" },
      { label: "Court Hire", href: "/court-hire" },
      { label: "Socials", href: "/socials" },
      { label: "Contact", href: "/contact" },
      { label: "Shop", href: "/shop" },
      { label: "Sign In", href: "/sign-up" },
    ],
    fotterText: "© 2025 Badminton Association. All rights reserved.",
  };

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode;
}) {

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get saved theme from localStorage, if available
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulated delay for UI smoothness
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en">
      <head>
        <title>Badminton Association</title>
      </head>
      <body className="relative flex flex-col min-h-screen">
        {/* Loading Spinner */}
        {/* {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent pointer-events-none">
            <div className="text-6xl sm:text-8xl animate-spin-slow pointer-events-auto">
              🏸
            </div>
          </div>
        )} */}
        {/* Layout Wrapper */}
        <Provider store={store}>

          <MainComponent loading={loading}>
            {children}
          </MainComponent>
          
          {/* Theme Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full z-50 shadow-md hover:bg-gray-300 transition-all sm:top-6 sm:right-6 sm:p-3"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button> */}
        </Provider>
      </body>
    </html>
  );
}



