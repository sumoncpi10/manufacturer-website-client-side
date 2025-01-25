module.exports = {
  // content: ["./src/**/*.{html,js}"],
content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}


// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
//           primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",
//         },
//       },
//       "dark",
//       "cupcake",
//     ],
//   },
//   plugins: [require("daisyui")],
// }
