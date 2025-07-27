import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 2s linear infinite',
            },
            colors: {
                bgThemeDark: 'oklch(0.18 0 0)', // smooth deep black
                // You can also add a slightly lighter black for smoothness:
                bgThemeSoft: 'oklch(0.22 0 0)', // soft black
            },
        },
    },
    // darkMode: 'class', // Enable dark mode
    plugins: [],
};

export default config;
