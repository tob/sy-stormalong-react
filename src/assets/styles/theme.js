// src/assets/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const otherblue    = '#4E8098'
export const red          = '#D32F2F'
export const blue         = '#3F51B5'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#CED3DC'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: blue,
  primary2Color: white,
  primary3Color: white,
  accent1Color: otherblue,
  textColor: blue,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
