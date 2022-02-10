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
        'custom-green': '#66bb6a',
        'custom-yellow': '#ffc107',
        'custom-purple': '#7b1fa2',
        'custom-red': '#f44336',
        'custom-orange': '#ff9800',
        'custom-blue': '#2196f3',
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
