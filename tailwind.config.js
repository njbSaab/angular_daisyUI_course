/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // пути к шаблонам Angular компонентов
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Подключаем плагин DaisyUI
  ],
  daisyui: {
    themes: [
      {
        dracula: {
          primary: "#f0060b",
          secondary: "#f0070c",
          accent: "#cc26d5",
          neutral: "#7702ff",
          "base-100": "#282A36",
          "base-200": "#414557",
        },
      },
    ],
  },
};
