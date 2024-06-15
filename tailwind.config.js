/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      fontFamily: {
        'Quicksand': ["Quicksand", "sans-serif"],
        'Rubik': ["Rubik", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
        "NunitoSans": ["Nunito Sans", "sans-serif"],
        "NotoSans": ["Noto Sans", "sans-serif"],
        "Recursive": ["Recursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
