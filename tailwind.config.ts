import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        quiz: "linear-gradient(0deg, rgba(0, 0, 0, 0.87) 0%, rgba(0, 0, 0, 0.87) 100%), linear-gradient(180deg, #FFF 78.59%, rgba(255, 255, 255, 0.00) 100%)",
      },
      fontFamily: {
        'metropolis' : ['Metropolis']
      },
    },
  },
  plugins: [],
} satisfies Config;
