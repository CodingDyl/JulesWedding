const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FDF5E6",
        sage: "#9DC183",
        gold: "#D4AF37",
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
