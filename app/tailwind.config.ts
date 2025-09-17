import { type Config } from 'tailwindcss';

export default {
  content: ['./app//.{ts,tsx,js,jsx}', './components//.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        vermaxx: {
          green: '#0E3B2E',
          copper: '#B67A3D',
          offwhite: '#F8F5EF',
          charcoal: '#1A1A1A',
          teal: '#4A7C76',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        logo: ['"Sacramento"', 'cursive'],
      },
    },
  },
  plugins: [],
} as Config;