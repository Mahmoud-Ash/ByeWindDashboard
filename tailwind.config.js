/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      colors: {
        main: {
          bg: "var(--bg-main)",
          txt: "var(--text-main)",
        },
        soft: "var(--text-soft)",
        softer: "var(--text-softer)",
        hover: "var(--hover-color)",
        "hover-soft": "var(--hover-soft)",
        bg2: "var(--BG2)",
        bg3: "var(--BG3)",
        bg4: "var(--BG4)",
        brand: "var(--brand)",
        cyan: "var(--cyan)",
      },
      boxShadow: {
        "input-focus":
          "0 0 0 0.5px var(--text-main), 0 0 0 5px var(--hover-soft)",
      },
    },
  },
  plugins: [],
};
