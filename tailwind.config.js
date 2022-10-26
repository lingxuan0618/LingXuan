/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0B1120',
        black: '#000',
        mainBlue: '#0EA5E9',
        hoverBlue: '#0D97D6',
      },
      backgroundImage: {
        lightLiner: 'linear-gradient(145deg, rgba(255,255,255,1) 24%, rgba(227,254,255,1) 41%, rgba(255,254,233,1) 60%, rgba(255,255,255,1) 75%)',
        darkLiner: 'linear-gradient(166deg, rgba(0,0,0,1) 13%, rgba(19,37,45,1) 30%, rgba(16,64,85,1) 43%, rgba(16,71,96,1) 49%, rgba(18,67,90,1) 56%, rgba(30,44,51,1) 71%, rgba(1,1,1,1) 92%)',
      },
    },
  },
  plugins: [
    /* eslint-disable global-require */
    /* eslint-disable global-require */
  ],
};
