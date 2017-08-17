import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MyLocation from 'material-ui/svg-icons/maps/my-location'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Stormalong"
        iconElementLeft={<IconButton><MyLocation /></IconButton>}/>
    )
  }

}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
})

export default Navigation
