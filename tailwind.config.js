/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      fontFamily: {
        'appleLookALike': ["Quicksand", 'sans-serif'],
      }
      // font-family: "Quicksand", sans-serif;
      /* font-family: "Rubik", sans-serif; */
      /* font-family: "Poppins", sans-serif; */
      /* font-family: "Nunito Sans", sans-serif; */
      /* font-family: "Noto Sans", sans-serif; */
    },
  },
  plugins: [],
};
