import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import LocalDining from 'material-ui/svg-icons/maps/local-dining'
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
        title="Recipes"
        iconElementLeft={<IconButton><LocalDining /></IconButton>}/>
    )
  }

}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id
})

export default Navigation
