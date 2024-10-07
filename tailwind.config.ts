import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'], 
        instrumentSerif: ['Instrument Serif', 'serif'],
      },
      colorPalette: {
        background: '#0A0A0A',
        headings: '#F5F5F8',
        paragraph: '#ABABAB',
        ui: '#0D0D0D',
        border: 'rgba(255, 255, 255, 0.1)',
        accent: '#292929',
      },
    }
  },

  plugins: []
} as Config;
