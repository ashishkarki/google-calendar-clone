const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js, png, svg}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
      colors: {
        // Configure your color palette here
        'custom-green': '#8ee693',
        'custom-yellow': '#e8ca5d',
        'custom-purple': '#c985e6',
        'custom-red': '#f2594e',
        'custom-orange': '#f2ad46',
        'custom-blue': '#4da6f0',
      },
    },
  },
  safelist: [
    // 'bg-custom-green',
    // 'bg-custom-yellow',
    // 'bg-custom-purple',
    // 'bg-custom-red',
    // 'bg-custom-orange',
    // 'bg-custom-blue',
    {
      pattern: /^bg-custom-/,
      // pattern: /bg-custom-(red|green|blue)-(200|300|500)/,
    },
  ],
  plugins: [require('@tailwindcss/forms')],
}
