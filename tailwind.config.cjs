/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'very-dark-blue': 'hsl(216, 12%, 8%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'orange': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
