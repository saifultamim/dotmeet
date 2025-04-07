/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/* .{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "#0860AC",
          secondary:"#F3F3F3"
        },
        fontFamily: {
          // greatVibes: ["Great Vibes", "cursive"],
          montserrat: ["Montserrat", "sans-serif"],
          // regularBrush: ["RegularBrush", "sans-serif"],
        },
        fontSize: {
          'xxs': '0.6rem',    
          'tiny': '0.7rem',
          'base-plus': '1.125rem', 
          'big': '1.75rem',
          'huge': '3.5rem',
        },
      },
    },
    plugins: [],
  };
  
