/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        'xsm': '500px',
        'sm': '640px',
        'md': '768px',
        'lmd': '916px',
        'slg':'950px',
        'lg': '1024px',
        
        'sxl': '1280px',
        'xl': '1380px',
        '2xl': '1536px',
      },
      
      fontFamily: {
         school: ['SCHOOL', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

