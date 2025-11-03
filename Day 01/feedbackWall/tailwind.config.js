import defaultTheme from "tailwindcss/defaultTheme";
import tailwindcssPreset from "tailwindcss/defaultConfig";

export default {
  presets: [tailwindcssPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
