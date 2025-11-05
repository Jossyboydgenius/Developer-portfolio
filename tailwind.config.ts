import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/commons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#070d06',
        'bg-secondary': '#1c2f1a',
        'bg-accent': '#091807',
        'bg-muted': '#243b21',
        foreground: '#f8f9f8',
        'muted-foreground': '#869285',
        'border-primary': '#243b21',
        'border-secondary': '#101530',
        primary: '#52c234',
        'primary-accent': '#03a003',
        destructive: '#7f1d1d',
        warning: '#ffa500',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #52c234 0%, #03a003 100%)',
        'gradient-2': 'linear-gradient(to right, #52c234 0%, #ffffff 100%)',
        'gradient-3': 'linear-gradient(190deg, #52c234 0%, rgba(18, 82, 78, 0.5) 100%)',
        'glow': 'radial-gradient(rgb(82, 194, 52, 0.1) 0%, rgba(7, 13, 6, 0.5))',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
    },
  },
  plugins: [],
};

export default config;
