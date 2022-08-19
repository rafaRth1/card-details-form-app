/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.tsx'],
   theme: {
      extend: {
         backgroundImage: {
            'card-front': "url('./src/assets/bg-card-front.png')",
            'card-back': "url('./src/assets/bg-card-back.png')",
         },
      },
   },
   plugins: [],
};
