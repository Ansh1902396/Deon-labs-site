/** @type {import('tailwindcss').Config} */
import anim from "tailwindcss-animated";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                "100px": "100px",
                "20px": "20px",
                "10px": "10px",
            },
            backgroundImage: {
                "hero-pattern": "url('./hero-bg.png')",
                "mission-Pattern": "url('/decor-1 .png')",
            },

            fontFamily: {
                inter: "Inter",
                tektur: "Tektur",
                poppins: "Poppins",
            },

            colors: {
                black: "#000",
                white: "#fff",
                crimson: "#ff306e",
                gray: {
                    100: "#121212",
                    200: "rgba(255, 255, 255, 0.16)",
                    300: "rgba(255, 255, 255, 0.2)",
                    400: "rgba(14, 14, 14, 0.54)",
                },
            },

            fontSize: {
                xs: "12px",
                mini: "15px",
                "21xl": "40px",
                "3xl": "22px",
                "25xl": "44px",
                "77xl": "96px",
            },
        },
        corePlugins: {
            preflight: false,
        },
    },
    plugins: [anim],
};

