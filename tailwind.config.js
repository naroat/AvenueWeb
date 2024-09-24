/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // 自定义响应式尺寸
      'c-xs': {'max': '500px'},
      'c-sm': {'min': '500px'},
      'c-md': {'min': '768px'},
      'c-lg': {'min': '1024px'},
      'c-xl': {'min': '1280px'},
      'c-2xl': {'min': '1536px'},
      ...defaultTheme.screens,
    },
    animation: {
      fold: 'fold 1s infinite'
    },
    keyframes: {
      fold: {
        '0%, 100%': { 
          opacity: 0
        },  
        '50%': { 
          opacity: 1
        }  
      }
    }
  },
  plugins: [],
}

