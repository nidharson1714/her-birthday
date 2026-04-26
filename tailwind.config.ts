import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        headline: ['"Newsreader"', 'serif'],
        body: ['"Noto Serif"', 'serif'],
        label: ['"Noto Serif"', 'serif'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        muted: '#6F6F6F',
        // 60-30-10 Palette
        // 60% Pastel Green (Backgrounds)
        parchment: '#e0ede2',
        'parchment-dim': '#d1dfd4',
        'parchment-container': '#cbe3d2',
        'parchment-high': '#c2ebd2',
        'parchment-highest': '#b2e8c8',
        'parchment-low': '#ebf3ed',
        
        // 10% Black (Text/Strong Accents)
        ink: '#11181c',
        'ink-light': '#3b4246',
        'ink-deep': '#090d0f',
        
        // 30% Lilac (Secondary/Accents/Surface)
        rose: '#8e7cc3', 
        'rose-container': '#b4a7d6',
        'rose-light': '#d9d2e9',
        gold: '#11181c', 
        'gold-container': '#674ea7',
        'gold-accent': '#8e7cc3', 
        'gold-light': '#d9d2e9',
        
        'surface-variant': '#d1dfd4',
        'on-surface': '#11181c',
        'on-surface-variant': '#3b4246',
        outline: '#717878',
        'outline-variant': '#c1c8c7',
      },
    },
  },
  plugins: [],
}

export default config
 
