module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      cobalt: "#1878e0",
      cerulean: "#0099d7",
      grayfog: "#ebeff6",
      graydove: "#c5d6e6",
      graymidnight: "#324350",
      grayshadow50: "#416581",
      graysteel: "#5f83a5",
      grayblue: "#eaf0f7",
      grayalt: "#f8f9fa",
    },
    extend: {
      boxShadow: {
        button: "0 0 10px 0 #94D3EC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
