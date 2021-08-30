module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'heroimg-mobile': 'url(public/images/bg-intro-mobile.svg)',
        'herodimg-desktop':"url('/public/images/bg-intro-desktop.svg')"

      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
