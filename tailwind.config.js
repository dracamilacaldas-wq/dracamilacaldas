/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))", // Pearl White
                foreground: "hsl(var(--foreground))", // Midnight Navy
                primary: {
                    DEFAULT: "hsl(var(--primary))", // Midnight Navy
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))", // Stone/Champagne
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))", // Muted Gold
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
                serif: ["Playfair Display", "serif"],
                heading: ["Playfair Display", "serif"],
                body: ["DM Sans", "sans-serif"],
            },
            boxShadow: {
                "card-default": "0 2px 15px -3px rgba(0,0,0,0.03)",
                "card-hover": "0 20px 40px -10px rgba(33,41,54,0.08)", // Soft dark navy shadow
                "button-glow": "0 0 25px rgba(184,156,116,0.25)", // Subtle gold glow
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
}
