import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#e6e6e6',
        'custom-yellow': '#f7da21',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: (arg0: { '.clip-hexagon': { clipPath: string } }) => void }) {
      addUtilities({
        '.clip-hexagon': {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        },
      });
    }),
  ],
};
export default config;
