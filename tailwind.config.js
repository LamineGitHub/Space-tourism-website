/** @type {import('tailwindcss').Config}*/
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D0D6F9",
        secondary: "#0B0D17",
        tertiary: "#FFFFFF",
      },
      fontFamily: {
        Bellefair: "Bellefair, serif",
        BarlowCondensed: "'Barlow Condensed', sans-serif",
        Barlow: "Barlow, sans-serif",
      },
      backgroundImage: {
        "home-desktop": "url('assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('assets/home/background-home-mobile.jpg')",
        "destination-desktop": "url('assets/destination/background-destination-desktop.jpg')",
        "destination-tablet": "url('assets/destination/background-destination-tablet.jpg')",
        "destination-mobile": "url('assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('assets/crew/background-crew-mobile.jpg')",
        "technology-desktop": "url('assets/technology/background-technology-desktop.jpg')",
        "technology-tablet": "url('assets/technology/background-technology-tablet.jpg')",
        "technology-mobile": "url('assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
