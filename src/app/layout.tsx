"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import "react-toastify/dist/ReactToastify.css";
import MainComponent from "./MainComponent";
import Banner from "./components/Banner";
import data from "./pages/dataBrisbaneBadminton.json";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // List of routes where Banner should NOT be shown
  const hideBannerRoutes = [
    "/login",
    "/register",
    "/pro_shop",
  ];

// Register service worker for image caching
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(err => {
      console.warn('Service worker registration failed:', err);
    });
  });
}
  let banner = null;
  if (pathname === "/club") banner = data.club.heroSlides[0];
  if (pathname === "/academy") banner = data.acadamy.heroSlides[0];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulated delay for UI smoothness
    return () => clearTimeout(timer);
  }, []);

  const showBanner = !hideBannerRoutes.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>Badminton Brisbane</title>
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
            {showBanner && <Banner banner={banner || data.home.heroSlides[0]} />}
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



