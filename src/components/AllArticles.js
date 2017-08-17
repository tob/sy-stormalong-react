import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import fetchArticles from '../actions/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import {ReflexProvider, Flex, Box } from 'reflexbox'

const space = [ 0, 6, 12, 18, 24 ]
const breakpoints = [ 32, 48, 64 ]

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 'flex',
    height: 'flex',
    overflowY: 'auto',
  },
};

class AllArticles extends PureComponent {
  static PropTypes = {
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {

     const articles= this.props.articles.map((article) => {
       return (
         <Box w={[ 1, 1/2, 1/3]} >
              <Article article={article} />
         </Box>
       )
     });

    return(
      <Flex

        wrap
        w={1}
        style={{ height: '100%' }}
        justify='space-around'
        >
             {articles}
      </Flex>
    )
   }
}

const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(AllArticles)
