/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/background.jpg')",
        'choices': "url('./assets/images/barista.jpg')",
        'about': "url('./assets/images/about-background.jpg')",
        'contact': "url('./assets/images/contact-background.jpg')"
      },

    },
  },
  plugins: [],
}
