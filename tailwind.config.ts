import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        quiz: "url(/KillEmAll.jpg)",
      },
      fontFamily: {
        'metropolis' : ['Metropolis']
      },
    },
  },
  plugins: [],
} satisfies Config;
