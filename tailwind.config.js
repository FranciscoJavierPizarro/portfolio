/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'blueNavDark': '#111927',
        'blueNavAccent': '#1A2332',
        'green':'#9FEF00',
        'lightgreen':'#5d6350',
        'bg':'#141D2B',
        'lightbg':'#1A2332'
      }
    },
    
  },
  plugins: [],
}
