module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'heroimg-mobile': 'url(public/images/bg-intro-mobile.svg)',
        'herodimg-desktop':"url('/public/images/bg-intro-desktop.svg')"

      }),

      width: {
        '1/02': '21em',
        '1/03': '62.65vw',
        '1/04': '41vw',
        '1/05': '88.6vw',
        '1/06': '76vw',
        '1/07': '33vw',
        '1/08': '91vw', //mainC
        '1/09': '55%',
        '1/10': '52vw',
        '1/00': '15em',
        '2/01': '83vw',
        '2/02': '23vw'
      },

      margin: {
        '-1/01': '-17.5vh'
      }

      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
