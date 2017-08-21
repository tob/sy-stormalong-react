// src/assets/styles/theme.js
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const red          = '#D32F2F'
export const blue         = '#3F51B5'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#CED3DC'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'
export const StormBlue    = '#43e8c2'
export const StormPink    ='#FF4A67'
export const StormYellow  = '#FF8F4A'


// Palette
export const palette = {
  primary1Color: StormBlue,
  primary2Color: white,
  primary3Color: white,
  accent1Color: darkGrey,
  textColor: StormBlue,
  alternateTextColor: white,
  canvasColor: StormBlue,
  borderColor: darkGrey,
  disabledColor: StormPink
}

export default getMuiTheme({ palette })
