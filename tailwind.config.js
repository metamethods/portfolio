/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,html,ts,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        courages: ['Courages', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        background: '#111',
        "background-secondary": '#222',
        primary: '#fff',
        secondary: '#ffebfa',
        mute: '#ffffff5a',
        "mute-secondary": '#ffffff8a',
        border: '#ffffff1a',
        svelte: '#ff3e00',
        link: '#46c',
      }
    },
  },
  plugins: [],
}

