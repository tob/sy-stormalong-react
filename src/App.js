import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/theme';
import Navigation from './components/Navigation'
import MapContainer from './components/mapcontainer'
import { connect } from 'react-redux'
import fetchArticles from './actions/fetch'
import FeatPage from './components/FeatPage'
import Footer from './components/Footer'
import BottomTabs from './components/Tabs'
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

  currentArticle(articleId) {
    const { articles } = this.props
    const article = articles.reduce((prev, next) => {
    if (next.id === articleId) { return next }
    return prev }, {})
    return article
  }

  render() {
    const { articles } = this.props
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <Navigation title="Stormalong"/>
            <BottomTabs articles={articles} secondary={true}
              tab1={ this.props.children }
              tab2={<FeatPage article={ this.findFeatArticle('About us') } />}
              tab3={<FeatPage article={ this.findFeatArticle('Over het schip') } />}
              tab4={<MapContainer articles={ articles }/>} />
            <Footer />
          </div>

        </MuiThemeProvider>
      )
    }
}

const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(App)
