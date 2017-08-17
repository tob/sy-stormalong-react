import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Title from './components/Title'
import Navigation from './components/Navigation'
import Map from './components/Map'
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
          </div>
        </MuiThemeProvider>
      )
    }
}



export default App
