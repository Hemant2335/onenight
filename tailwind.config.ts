import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#D4AF37', // You can tweak this hex code
      },
      backgroundImage: {
        'hero-pattern': "url('/dubai-skyline.jpg')",
      },
    },
  },
  plugins: [],
}
export default config