import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyLocation from 'material-ui/svg-icons/maps/my-location'
import { history } from '../store'
import navbarImage from '../assets/images/logoWhite3.png'

class Navigation extends PureComponent {

  goHome() {
    history.push('/')
  }

  render() {
    return (
      <AppBar
        title="Stormalong"
        iconElementLeft={<IconButton onClick={ this.goHome }><img src={navbarImage} className='navbarLogo' /></IconButton>}/>
    )
  }

}


export default Navigation
