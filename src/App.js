import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation'
import Map from './components/Map'
import { connect } from 'react-redux'
import fetchArticles from './actions/fetch'
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

  componentWillMount() {
    this.props.fetchArticles()
  }

  findFeatArticle(artTitle) {
    const { articles } = this.props
    const featArticle = articles.reduce((prev, next) => {
    if (next.title === artTitle) { return next }
    return prev }, {})
    return featArticle
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
                <Box w={[ 1, 1/2, 1/2]} >
                <FeatPage article={ this.findFeatArticle('About us') } />
                </Box>
                <Box w={[ 1, 1/2, 1/2]} >
                <FeatPage article={ this.findFeatArticle('Over het schip') } />
                </Box>
              </Flex>
          </div>
        </MuiThemeProvider>
      )
    }
}

const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(App)
