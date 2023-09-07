import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        merge: {
          from: {opacity:'0'},
          to: {opacity:'1'}
          },
      },
      animation: {
        merge: 'fallDown 0.6s ease-in',
      },
    }
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
export default config
