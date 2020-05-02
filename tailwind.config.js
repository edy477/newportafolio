module.exports = {
  purge: [],
  theme: {
        backgroundColor: theme => ({
                ...theme('colors'),
      'altblue': '#303748',

}),

    extend: {
        gridTemplateColumns: {
            // Simple 16 column grid
            '2' : '15vw 2fr '
            // '16': 'repeat(16, minmax(0, 1fr))',

            // Complex site-specific column configuration
            //  'footer': '200px minmax(900px, 1fr) 100px',
        }

    },
  },
  variants: {},
  plugins: [],
}
