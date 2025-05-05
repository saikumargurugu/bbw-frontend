const config = {
  plugins: ["@tailwindcss/postcss"],
  tailwindcss: {
    config: "./tailwind.config.js",
    configContent: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./public/**/*.{html,js}",
    ],
    configFile: "./tailwind.config.js",
    configPath: "./tailwind.config.js",
  },
};

export default config;
