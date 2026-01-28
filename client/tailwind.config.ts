import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // tailwind.config.ts
      theme: {
        extend: {
          // ... other extensions
          keyframes: {
            scan: {
              "0%, 100%": { top: "10%" },
              "50%": { top: "90%" },
            },
          },
          animation: {
            scan: "scan 2s ease-in-out infinite",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
