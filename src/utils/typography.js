import './global.css'

import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'

delete sternGroveTheme.googleFonts

const customTheme = {
  ...sternGroveTheme,
  baseFontSize: '20px',
  baseLineHeight: 1.75,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['PT Sans', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 700,
  overrideThemeStyles: ({ rhythm }) => ({
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    },
    h1: {
      marginTop: '0.5rem'
    },
    a: {
      background: 'linear-gradient(to bottom, #ff9800 0%, #ff9800 100%)',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '3px 3px',
      color: '#000',
      textDecoration: 'none',
      paddingBottom: '.25em'
    },
    'a:hover, a:active': {
      color: '#b1055b',
      backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
      backgroundPosition: '0 100%',
      backgroundSize: 'auto 6px',
      backgroundRepeat: 'repeat-x',
      textDecoration: 'none'
    },
    'p code': {
      fontSize: '.8rem'
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit'
    },
    'li code': {
      fontSize: '.8rem'
    }
  })
}

const typography = new Typography(customTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
