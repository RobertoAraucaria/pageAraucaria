/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cuprum', 'system-ui', 'sans-serif'],
        'im-fell': ['IM FELL Great Primer SC', 'serif'],
        inter: ['Inter', 'sans-serif'],
        imprima: ['Imprima', 'sans-serif'],
        irish: ['Irish Grover', 'cursive'],
        inder: ['Inder', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    backgroundImage: true,
  },
}
