import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Title from './components/Title'
import Navigation from './components/Navigation'
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
            <iframe title="map" src="https://www.google.com/maps/d/u/0/embed?mid=1B1SUCj7Tj7Vi73aRkDM17x8vfR4" width="100%" height="480"></iframe>
            <div>
            { this.props.children }
            </div>
          </div>
        </MuiThemeProvider>
      )
    }
}



export default App
