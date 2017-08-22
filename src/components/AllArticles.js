import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './Article'
import fetchArticles from '../actions/fetch'
import {Flex, Box } from 'reflexbox'
import FeatArt from './FeatArt'

class AllArticles extends PureComponent {
  static PropTypes = {
    fetchArticles: PropTypes.func.isRequired
  }

  findFeatArticle(artTitle) {
    const { articles } = this.props
    const featArticle = articles.reduce((prev, next) => {
    if (next.title === artTitle) { return next }
    return prev }, {})
    return featArticle
  }

  render() {
    const filtArticles = this.props.articles.filter((article) => {
      return article.title !== 'Over ons' && article.title !== 'Over het schip' && article.title !== 'Sy-Stormalong'
    })
     const articles = filtArticles.map((article, index) => {
       return (
         <Box key={index} w={[ 1, 1/2, 1/3, 1/4]} >
              <Article key={index} article={article} />
         </Box>
       )
     });

     if (!articles) return null

    return(
      <div>
        <FeatArt article={ this.findFeatArticle('Sy-Stormalong') } />
        <Flex
          wrap
          w={1}
          style={{ height: '100%' }}
          justify='left' >
               {articles}
        </Flex>
      </div>
    )
   }
}

const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(AllArticles)
