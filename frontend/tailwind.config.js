/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: {
          "blue": "#3158a0",
        },

      }
    },
    typography: {
      default: {
        css: {
          color: "#333",
          a: {
            color: "#4E80A4",
            "&:hover": {
              color: "#385971"
            }
          }
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
}
