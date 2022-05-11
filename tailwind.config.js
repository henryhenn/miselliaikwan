module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center: false,
      padding: '16px'
    },
    screens:{
      'sm': '320px',
      'md': '481px',
      'lg': '769px',
      'xl': '1025px',
      '2xl': '1201px'
    },
    extend: {},
  },
  plugins: [],
}