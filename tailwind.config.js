/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
            },
            colors: {
                navy: '#000000',
                'light-navy': '#111111',
                'lightest-navy': '#222222',
                slate: '#8892b0',
                'light-slate': '#a8b2d1',
                'lightest-slate': '#ccd6f6',
                white: '#e6f1ff',
                green: '#64ffda',
            },
            boxShadow: {
                'neon': '0 0 10px rgba(100, 255, 218, 0.1)',
            }
        }
    },
    plugins: [],
}
