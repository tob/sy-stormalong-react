// src/assets/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const otherblue    = '#4E8098'
export const red          = '#D32F2F'
export const blue         = '#4D6A78'
export const lightblue    = '#90C2E7'
export const white        = '#FCF7F8'
export const darkGrey     = '#757575'
export const grey         = '#CED3DC'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: blue,
  primary2Color: lightblue,
  primary3Color: lightblue,
  accent1Color: otherblue,
  textColor: blue,
  alternateTextColor: white,
  canvasColor: lightblue,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
