module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '36rem'
      },
      colors: {
        red: {
          700: '#DC291E',
          lightShade: '#FBE9E8'
        },
        light: '#F7F5F8',
        AutomatedPricing: '#D5FFD1',
        ManualPricing: '#FFFCBF',
        UdmReview: '#DBE5FF',
        VpaReview: '#DBDBDB'
      },
      fontSize: {
        sm: '.82rem',
        xs: '.73rem'
      }
    }
  },
  plugins: []
};
