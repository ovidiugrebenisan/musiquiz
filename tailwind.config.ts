import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'metropolis' : ['Metropolis']
      },
    },
  },
  plugins: [],
} satisfies Config;
