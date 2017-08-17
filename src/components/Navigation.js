import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyLocation from 'material-ui/svg-icons/maps/my-location'

class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        title="Stormalong"
        iconElementLeft={<IconButton><MyLocation /></IconButton>}/>
    )
  }

}


export default Navigation
