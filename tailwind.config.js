/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter':['inter' , 'sans-serif']
      },
      colors:{
        'custom-red':'#E4003f',
        'custom-black':'#131111',
        'custom-orange':'#FF5B2B',
        'custom-green':'#11BF36',

      },
    },
  },
  plugins: [],
}

