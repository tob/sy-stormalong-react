import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import fetchArticles from '../actions/fetch'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

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
  static propTypes = {
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {

     const articles= this.props.articles.map((article) => {
       return (
         <div key={article.id}>
         <Article article={article} /> </div>
       )
     });

    return(
      <div  style={styles.root}>
       <GridList
         cellHeight='flex'
         style={styles.gridList}>
         {articles}
       </GridList>
     </div>
    )
   }
}

const mapStateToProps = ({ articles }) => ({
  articles
})

export default connect(mapStateToProps, { fetchArticles })(AllArticles)
