import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        quiz: "url(/quiz_background.png)",
      },
      fontFamily: {
        'metropolis' : ['Metropolis']
      }
    },
  },
  plugins: [],
} satisfies Config;
