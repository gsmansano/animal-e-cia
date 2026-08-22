import type { Config } from 'tailwindcss';
import { brandColors } from './src/design-system/colors';
import { typography } from './src/design-system/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: brandColors,
      fontFamily: typography.fontFamily,
    },
  },
  plugins: [],
};

export default config;
