// tailwind.config.js

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        palatino: ['Palatino Linotype', 'serif'],
      },
      colors: {
        primaryBlue: '#413B89',
        border1: 'E8EFF7',
        defaultMainStrokeL2: '#D9CFFB',
        dividersBordersLightGrey: '#CECECE',
        inactiveStateColor: '#49454FCC',
        inputBoxStrokeThin: '#00000026',
        secondaryWhite: '#FFFFFF',
        textColorOpacity80: '#222222E5',
        sidebarTypography: '#222222E5',
        sidebarArrow: '#9197B3',
        navbarTypography: '#373B5C',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Add more screen sizes as needed
        'max-xs': { 'max': '360px' },
        'max-sm': { 'max': '640px' },
        'max-md': { 'max': '768px' },
        'max-lg': { 'max': '1024px' },
        'max-xl': { 'max': '1440px' },
        'max-2xl': { 'max': '1536px' },
      },
    },
  },
  plugins: [
  ],
}
