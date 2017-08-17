import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation'
import Map from './components/Map'

import FeatPage from './components/FeatPage'
import { Flex, Box } from 'reflexbox'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {

      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <Navigation title="Stormalong"/>
            { this.props.children }
            <Map/>
            <Flex
              wrap
              w={1}
              style={{ height: '100%' }}
              justify='space-around' >
                <Box w={[ 1, 1/2, 1/3]} >
                <h1>About Us</h1>
                <FeatPage artTitle="About us"/>
                </Box>
                <Box w={[ 1, 1/2, 1/3]} >
                <h1>The Ship</h1>

                </Box>
              </Flex>
          </div>
        </MuiThemeProvider>
      )
    }
}



export default App
