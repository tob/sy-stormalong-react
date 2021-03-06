import React, { PureComponent } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import { history } from '../store'
import navbarImage from '../assets/images/logoWhite3.png'
// import FlatButton from 'material-ui/FlatButton';

class Navigation extends PureComponent {

  goHome() {
    history.push('/')
  }

  render() {

    return (
      <AppBar
        title="Sy-Stormalong"
        iconElementLeft={
          <IconButton onClick={ this.goHome }>
            <img alt='main-navbar' src={navbarImage} className='navbarLogo' />
          </IconButton>}
          />
    )
  }

}


export default Navigation
