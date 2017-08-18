import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './Article'
import fetchArticles from '../actions/fetch'
import {Flex, Box } from 'reflexbox'

class AllArticles extends PureComponent {
  static PropTypes = {
    fetchArticles: PropTypes.func.isRequired
  }

  // componentWillMount() {
  //   this.props.fetchArticles()
  // }


  render() {

    // const aboutUsArr = this.props.articles.filter((article) => {return article.title === "About us"})
    //
    // const aboutUs = aboutUsArr.map((article) => {
    //   return (
    //          <FeatArt article={article} />
    //   )
    // });

     const articles = this.props.articles.map((article, index) => {
       return (
         <Box key={index} w={[ 1, 1/2, 1/3]} >
              <Article key={index} article={article} />
         </Box>
       )
     });

    return(
      <div>
        <Flex
          wrap
          w={1}
          style={{ height: '100%' }}
          justify='space-around' >
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
