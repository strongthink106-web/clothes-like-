/* Tailwind build config (only needed if you edit classes — see README). */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", fg: "var(--fg)", mut: "var(--mut)", card: "var(--card)", soft: "var(--soft)", line: "var(--line)", gold: "var(--gold)" },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", '"SF Pro Display"', '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ["ui-serif", '"New York"', "Georgia", '"Times New Roman"', "serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.96)" }, "100%": { opacity: 1, transform: "none" } },
        drift: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: { rise: "rise .8s cubic-bezier(.2,.7,.2,1) both", pop: "pop .35s ease both", drift: "drift 7s ease-in-out infinite" },
    },
  },
  plugins: [],
};
