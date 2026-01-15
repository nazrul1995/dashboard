/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#2b8cee",
                "sidebar-bg": "#101922",
                "sidebar-dark": "#1a1f26", // Updated color
                "workspace-bg": "#f8fafc",
                "background-light": "#f8fafc", // Unifying
                "background-dark": "#101922",
                "border-subtle": "#e2e8f0"
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        },
    },
    plugins: [require("daisyui")],
}
