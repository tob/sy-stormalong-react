import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Title from './components/Title'
import Navigation from './components/Navigation'
import AllArticles from './components/AllArticles'

import './App.css'

const articles = [
  {
    title: 'Spanish Siesta on the sea',
    body: 'A traditional fish from Spanish sea called tortuga española or tortuga de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  },
  {
    title: 'Caraibbean traditions',
    body: 'Let the fish wear flowers',
  },
  {
    title: 'Dance under the sea',
    body: 'A breathtaking experience',
  },
  {
    title: 'Actually I was on the couch in AMS in the past 18 months',
    body: 'All this does not exist, and neither do you',
  }
]


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
        <Navigation content="Title Component" />
          <Title content="Title Component" />
          <AllArticles articles={articles} />
        </div>
      </MuiThemeProvider>
    )
  }
}




export default App
