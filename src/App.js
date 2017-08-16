import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Title from './components/Title'
import Navigation from './components/Navigation'
import AllArticles from './components/AllArticles'

import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  updateArticle(id, update) {
    // We will clean this up later
  }

  render() {
      return (
        <div className="App">
        <Navigation title="Stormalong"/>
          { this.props.children }
        </div>
      )
    }
}



export default App
