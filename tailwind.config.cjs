/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors:{
      'gray-900':'#121214',
      'gray-800':'#202024',
      'gray-400':'#7c7c8A',
      'gray-100':'#e1e1e6',
      'gray-200':'#c4c4cc',
      'cyan-500':'#81d8f7',
      'cyan-300':'#a8e2f6',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
