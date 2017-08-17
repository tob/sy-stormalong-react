import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyLocation from 'material-ui/svg-icons/maps/my-location'
import { history } from '../store'

class Navigation extends PureComponent {

  goHome() {
    history.push('/')
  }

  render() {
    return (
      <AppBar
        title="Stormalong"
        iconElementLeft={<IconButton onClick={ this.goHome }><MyLocation /></IconButton>}/>
    )
  }

}


export default Navigation
