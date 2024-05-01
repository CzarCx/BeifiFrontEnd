/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "strong-blue": "#001C30",
        "light-blue": "#6CBEEC",
        "strong-red": '#C04A4A',
        "light-gray": '#D0D5DD',
        "normal-gray": '#9E9E9E',
        "i-blue": '#D1E9FF',
        "xstrong-blue": '#3A8DCC',
        "t-blue": '#344054',
        "xtrong-gray": '#707070',
      },
      width: {
        "large": "1000px",
        "i-w": "325px"
      },
      height: {
        "medium": "780px",
      },
      borderWidth: {
        "1": '1px',
        "1.5": '1.5px',
        "3": '3px',
      },
      fontSize: {
        "normal": '22px',
        "description": '18px',
        "s-description": '14px',

      }
    },
  },
  plugins: [],
}

