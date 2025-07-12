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
                bgThemeDark: 'oklch(0.39 0.13 24.4)',
            },
        },
    },
    // darkMode: 'class', // Enable dark mode
    plugins: [],
};

export default config;
