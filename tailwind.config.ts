import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'back-color': 'rgb(255,255,255)',
        'text-color': 'rgb(0,0,0)',
        'highlight-color': 'rgb(39,73,255)',
        'wanted-gray': 'rgb(200,200,200)',
        'wanted-hover-gray': 'rgb(245,245,245)',
      },
    },
  },
  plugins: [],
}
export default config
