/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Kanit",
      secondary: "Lobster Two",
    },
    extend: {
      colors: {
        primary: "#ba9373",
        lightPrimary: "#625b4b",
        lightCoffee: "hsla(27, 34%, 59%, 0.5)",
        grayColor: "#ababab",
        bgColor: "#141414",
        secondary: "#0f0f0f",
        third: "hsla(0, 0%, 0%, 0.75)",
        fourth: "hsla(0, 0%, 0%, 0.5)",
      },
      backgroundImage: {
        homeBg: "url('./assets/images/home-bg.png')",
        menuBg:
          "linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.5)),url('./assets/images/bg.jpg')",
        darkBg: "rgba(0 ,0 , 0, 0.5)",
        offerBg: "url(./assets/images/coffee-video.mp4)",
        reservationBg:
          "linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.5)),url('./assets/images/reservation-bg.png')",
      },
    },
  },
  plugins: [],
};
