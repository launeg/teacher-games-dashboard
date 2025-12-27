/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#4F46E5',  // Indigo 600 - Main action
          lightBlue: '#818CF8', // Indigo 400 - Secondary
          green: '#10B981', // Emerald 500 - Success/Growth
          yellow: '#FBBF24', // Amber 400 - Fun/Accent
          cream: '#F8FAFC', // Slate 50 - Background
          text: '#1E293B',  // Slate 800 - Readable Text
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
